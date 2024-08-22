const { SlashCommandBuilder, ChatInputCommandInteraction, Client, PermissionFlagsBits, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlock')
        .setDescription('Bu kanalı açar.')
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
                SendMessages: true
            });

            await interaction.reply({ content: `Kanal **${channel.name}** başarıyla açıldı.`, ephemeral: false });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu. Lütfen tekrar deneyin.', ephemeral: true });
        }
    }
};
