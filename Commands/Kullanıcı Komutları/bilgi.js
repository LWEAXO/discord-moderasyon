const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Belirtilen kişinin bilgilerini gösterir."),
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const { user } = interaction
        
        try {
            // Bilgi mesajını oluşturma
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(`Yapımcımın'ın Bilgileri`)
                .setDescription(`Kullanıcı: ${user.username}`)
                .addFields(
                    { name: 'Adım', value: '\`LWEAXO\`', inline: true }, // Bu alanı gereksinimlerinize göre özelleştirin
                    { name: 'GitHub', value: '[GitHub Profilim](https://github.com/LWEAXO)', inline: true },
                    { name: 'Instagram', value: '[Instagram Profilim](https://instagram.com/lweaxo)', inline: true },
                    { name: 'Discord', value: '[Discord Profilim](https://discord.com/users/1015356240492245054)', inline: true }
                )
                .setFooter({ text: 'Bilgiler güncellenmiştir.' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed], ephemeral: false });

        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });
        }
    }
}
