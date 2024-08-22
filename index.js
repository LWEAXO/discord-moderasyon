const { Client, GatewayIntentBits, Partials, WebhookClient, Collection, PermissionFlagsBits, AttachmentBuilder, EmbedBuilder, codeBlock, ChannelType, InteractionType, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, UserSelectMenuBuilder, embedLength } = require("discord.js");
const lweaxo = require('ansi-colors');
const { DeveloperID, Botun_Duracağı_ses_kanal_id } = require("./config.json")
//👑 Github: LWEAXO
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,  
    GatewayIntentBits.GuildInvites, 
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildScheduledEvents, 
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.User,
    Partials.Message, 
    Partials.GuildMember, 
    Partials.ThreadMember,
  ],
});
client.config = require("./config.json");
client.commands = new Collection();
client.subCommands = new Collection();
client.events = new Collection();
client.setMaxListeners(60);

  const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);
console.log("\n  [33m██╗░░░░░ ██╗░░░░░░░██╗ ███████╗ ░█████╗░ ██╗░░██╗ ░█████╗░  [34m██████╗░ ██╗ ░██████╗ ░█████╗░ ░█████╗░ ██████╗░ ██████╗░\n  [33m██║░░░░░ ██║░░██╗░░██║ ██╔════╝ ██╔══██╗ ╚██╗██╔╝ ██╔══██╗  [34m██╔══██╗ ██║ ██╔════╝ ██╔══██╗ ██╔══██╗ ██╔══██╗ ██╔══██╗\n  [33m██║░░░░░ ╚██╗████╗██╔╝ █████╗░░ ███████║ ░╚███╔╝░ ██║░░██║  [34m██║░░██║ ██║ ╚█████╗░ ██║░░╚═╝ ██║░░██║ ██████╔╝ ██║░░██║\n  [33m██║░░░░░ ░████╔═████║░ ██╔══╝░░ ██╔══██║ ░██╔██╗░ ██║░░██║  [34m██║░░██║ ██║ ░╚═══██╗ ██║░░██╗ ██║░░██║ ██╔══██╗ ██║░░██║\n  [33m███████╗ ░╚██╔╝░╚██╔╝░ ███████╗ ██║░░██║ ██╔╝╚██╗ ╚█████╔╝  [34m██████╔╝ ██║ ██████╔╝ ╚█████╔╝ ╚█████╔╝ ██║░░██║ ██████╔╝\n  [33m╚══════╝ ░░╚═╝░░░╚═╝░░ ╚══════╝ ╚═╝░░╚═╝ ╚═╝░░╚═╝ ░╚════╝░  [34m╚═════╝░ ╚═╝ ╚═════╝░ ░╚════╝░ ░╚════╝░ ╚═╝░░╚═╝ ╚═════╝░\n  ");
if(Botun_Duracağı_ses_kanal_id !== "" || " " || "  ") {
  try {
    const { joinVoiceChannel } = require('@discordjs/voice');
    const seslikanal = `${Botun_Duracağı_ses_kanal_id}`
     client.on('ready', () => {
       let channel = client.channels.cache.get(seslikanal);
       if (!channel) {
         console.log(`(${seslikanal}) `.bold + `İD'li Ses Kanalına Katılırken Bir Hata Oluştu!`);
        }

      const VoiceConnection = joinVoiceChannel({
          channelId: seslikanal, 
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator 
       });
       
       if (!VoiceConnection) {
         console.log(`(${seslikanal}) `.bold + `İD'li Ses Kanalına Katılırken Bir Hata Oluştu!`, 'error');
        }
      setTimeout(async () => {
        console.log(lweaxo.green.bold(`(${Botun_Duracağı_ses_kanal_id}) ` + (lweaxo.yellow.bold(`İD'li Ses Kanalına Katıldım. ✅`)))) //lweaxo
      }, 9000);
     });
  } catch {
      const seslikanal = `${Botun_Duracağı_ses_kanal_id}`
      console.log(`(${seslikanal}) `.bold + `İD'li Ses Kanalına Katılırken Bir Hata Oluştu!`);
 };
} else {

}

client.login(client.config.token);
































































































//Github: LWEAXO