const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client, ChannelType, AttachmentBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Belirtilen kullanıcıyı banlar veya banını kaldırır.")
        .addUserOption(option =>
            option.setName('kullanıcı')
                .setDescription('Banlamak veya banını kaldırmak istediğiniz kullanıcıyı seçin.')
                .setRequired(true)//👑 Github: LWEAXO
        )//👑 Github: LWEAXO
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    /**
     * @param {Client} client//👑 Github: LWEAXO
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const user = interaction.options.getUser('kullanıcı');
        const member = await interaction.guild.members.fetch(user.id).catch(() => null);

        if (!member) {
            return interaction.reply({ content: 'Bu kullanıcı sunucuda bulunamadı.', ephemeral: true });
        }

        try {
            const isBanned = await interaction.guild.bans.fetch(user.id).catch(() => null);
            
            if (isBanned) {
                return interaction.reply({ content: `${user.username} zaten banlı.`, ephemeral: true });
            }
//👑 Github: LWEAXO
            if (!member.bannable) {
                return interaction.reply({ content: 'Bu kullanıcıyı banlayamıyorum.', ephemeral: true });
            }
//👑 Github: LWEAXO
            await member.ban({ reason: 'Komut ile banlandı' });
            await interaction.reply({ content: `${user.username} \`${user.id}\` başarıyla banlandı.`, ephemeral: true });
            
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });
        }
    }//👑 Github: LWEAXO
}