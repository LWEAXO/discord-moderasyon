const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Belirtilen kullanıcıyı belirli bir süre boyunca sessize alır.")
        .addUserOption(option =>
            option.setName('kullanıcı')
                .setDescription('Sessize almak istediğiniz kullanıcıyı seçin.')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('süre')
                .setDescription('Kullanıcıyı sessize almak istediğiniz süre (dakika cinsinden).')
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
        const süre = interaction.options.getInteger('süre');

        if (!member) {
            return interaction.reply({ content: 'Bu kullanıcı sunucuda bulunamadı.', ephemeral: true });
        }

        if (!member.moderatable) {
            return interaction.reply({ content: 'Bu kullanıcıyı sessize alamıyorum.', ephemeral: true });
        }

        const timeoutDuration = süre * 60 * 1000; // Süreyi dakika cinsinden milisaniyeye çevirme
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

        try {//👑 Github: LWEAXO
            await channel.permissionOverwrites.edit(channel.guild.id, {//👑 Github: LWEAXO
                SendMessages: true
            });
//👑 Github: LWEAXO
            await interaction.reply({ content: `Kanal ${channel.name} başarıyla açıldı.`, ephemeral: false });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu. Lütfen tekrar deneyin.', ephemeral: true });
        }
    }
};
//👑 Github: LWEAXO
        try {
            await member.timeout(timeoutDuration, `Komut ile sessize alındı (${süre} dakika)`);
            await interaction.reply({ content: `${user.username} başarıyla ${süre} dakika boyunca sessize alındı.`, ephemeral: false });

        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu.', ephemeral: true });
        }
    }
}
