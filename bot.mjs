//common  packages used 
import { GatewayIntentBits, EmbedBuilder, Message } from "discord.js";
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
        GatewayIntentBits.MessageContent
    ]
    
});

client.on('clientReady', () =>{
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

        case 'help':
            const embedcolor = '#eb8c34'
            const page1 = new EmbedBuilder()
            .setColor(embedcolor)
            .addFields(
                {name:'example paginated help command (page1) add functions and describe your commands here',value:' '}
            )

            const page2 = new EmbedBuilder()
            .setColor(embedcolor)
            .addFields(
                {name:'2nd page of paginated help command  if you want add more pages to it create more embed builders as follows',value:' '}
            )

            const embedsArray = [page1, page2]

            await pagination({
                embeds: embedsArray,
                author: message.member.user,
                message: message,
                ephemeral: true,
                time: 40000, /* 40 seconds timeout time */
                disableButtons:  false, /* remove buttons after timeout */
                fastSkip: false,
                pageTravel: false,
                buttons: [
                    {
                        type: ButtonTypes.previous,
                        label: 'previous page',
                        style: ButtonStyles.Primary,
                    },
                    {
                        type: ButtonTypes.next,
                        label: 'next page',
                        style: ButtonStyles.Success
                    }
                ]


            });
        break;



     };




});
client.login(process.env.token)




