const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Belirtilen kullanıcı ID'sinin banını kaldırır.")
        .addStringOption(option =>
            option.setName('kullanıcı_id')
                .setDescription('Banını kaldırmak istediğiniz kullanıcının ID\'sini girin.')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const userId = interaction.options.getString('kullanıcı_id');

        try {
            const isBanned = await interaction.guild.bans.fetch(userId).catch(() => null);
//👑 Github: LWEAXO
            if (!isBanned) {
                return interaction.reply({ content: `Bu ID'ye sahip kullanıcı zaten banlı değil.`, ephemeral: true });
            }
//👑 Github: LWEAXO
            await interaction.guild.members.unban(userId, 'Komut ile ban kaldırıldı');
            await interaction.reply({ content: `ID'si \`${userId}\` olan kullanıcının banı başarıyla kaldırıldı.`, ephemeral: false });
            //👑 Github: LWEAXO
        } catch (error) {//👑 Github: LWEAXO
            console.error(error);//👑 Github: LWEAXO
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });//👑 Github: LWEAXO
        }//👑 Github: LWEAXO
    }//👑 Github: LWEAXO
}//👑 Github: LWEAXO
//👑 Github: LWEAXO












































































//👑 Github: LWEAXO