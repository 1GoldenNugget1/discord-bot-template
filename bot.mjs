//common  packages used 
import { GatewayIntentBits, EmbedBuilder, Message, GatewayIntentBits } from "discord.js";
import  {pagination, ButtonTypes, ButtonStyles} from '@devraelfreeze/discordjs-pagination';
import DiscordJS from 'discord.js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
// setting up  intents mostly used by my projects 
const client = new DiscordJS.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageCintent
    ]
    
});

client.on('ready', () =>{
    console.log('bot is up and running')
});
//prefix setup
const prefix = '%'
const prefixLength = 1
//setting up new discordjs  client itself
client.on('messageCreate', async (message) =>{
    if (message.author.bot) return; //ignore bot messages
    if (!message.content.startsWith(prefix)) return; //ignore messages that  do not start with given prefix 
    const args = message.content.slice(prefixLength).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    /* creating command switch in order to prevent  memory leaks and 
    exceeding event listeners limit */
     switch (command) {
        //enter commands cases here 

     };




});
client.login(process.env.token)




