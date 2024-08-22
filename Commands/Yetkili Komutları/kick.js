const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Belirtilen kullanıcıyı sunucudan atar.")
        .addUserOption(option =>
            option.setName('kullanıcı')
                .setDescription('Sunucudan atmak istediğiniz kullanıcıyı seçin.')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
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
//👑 Github: LWEAXO
        if (!member.kickable) {
            return interaction.reply({ content: 'Bu kullanıcıyı atamıyorum.', ephemeral: true });
        }

        try {
            await member.kick(`${interaction.user.username} tarafından Komut ile atıldı`);
            await interaction.reply({ content: `${user.username} başarıyla sunucudan atıldı.`, ephemeral: false });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });
        }
    }
}
//👑 Github: LWEAXO