const { SlashCommandBuilder, ChatInputCommandInteraction, Client, PermissionFlagsBits, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lock')
        .setDescription('Bu kanalı kilitler.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const channel = interaction.channel; // Komutun yapıldığı kanalı al

        if (channel.type !== ChannelType.GuildText) { // v14 için ChannelType.GuildText kullan
            return interaction.reply({ content: 'Bu komut yalnızca metin kanalları için geçerlidir.', ephemeral: true });
        }

        try {
            await channel.permissionOverwrites.edit(channel.guild.id, {
                SendMessages: false
            });

            await interaction.reply({ content: `Kanal **${channel.name}** başarıyla kilitlendi.`, ephemeral: false });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu. Lütfen tekrar deneyin.', ephemeral: true });
        }
    }
};
