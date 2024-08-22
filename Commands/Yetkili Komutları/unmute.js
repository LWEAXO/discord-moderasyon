const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("untimeout")
        .setDescription("Belirtilen kullanıcının sessizliğini kaldırır.")
        .addUserOption(option =>
            option.setName('kullanıcı')
                .setDescription('Sessizliğini kaldırmak istediğiniz kullanıcıyı seçin.')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const user = interaction.options.getUser('kullanıcı');
        const member = await interaction.guild.members.fetch(user.id).catch(() => null);

        if (!member) {
            return interaction.reply({ content: 'Bu kullanıcı sunucuda bulunamadı.', ephemeral: true });
        }

        if (member.communicationDisabledUntilTimestamp === null) {
            return interaction.reply({ content: `${user.username} zaten sessiz değil.`, ephemeral: true });
        }

        try {
            await member.timeout(null); // Timeout'u kaldırmak için null değerini kullanıyoruz.
            await interaction.reply({ content: `${user.username} başarıyla sessizliği kaldırıldı.`, ephemeral: false });

        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });
        }
    }
}
