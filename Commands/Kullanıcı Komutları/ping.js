const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client, ChannelType, AttachmentBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Botun Pingini Gösterir"),
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const pingembed2 = new EmbedBuilder()
        .setTitle(`Botun Pingi!`)
        .setDescription(`**🏓 Pingim: ${client.ws.ping}**`)
        .setFooter({ text: `${guild.name}`, iconURL: user.displayAvatarURL() })

        setTimeout(async () => {
            await interaction.reply({ embeds: [pingembed2] });
        }, 1000);
    }
}