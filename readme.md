# Welcome to the complex guide to this template!


### What is it?

I made this template to help others develop their own working, yet simple, Discord bots contained in a single _.mjs_ file.
It is not the greatest one and when you would like make something bigger I highly recommend to refactorise this code as it might get hard to debug it while the whole code is within a single file (speaking from experience; I have private project which grew up to over 1k lines of code and it is really hard to move around it and debug certain functions if they stop working).

### Quickstart Guide
1. Copy contents of this folder to new empty directory .

2. Find your app token - go to [discord.dev](https://discord.com/developers/applications) and make a new application (if you don't have one already). Click on it and find the **Bot** section on the left panel of the developer portal, then you should see the **Token** section. If you can't see your token, click the **Reset Token** button.  

3. Paste your token into **.env** file as follows:  

**```token=[your token goes here]```** 

4. Install necessary packages using an appropriate script:  
 - **pkg-install-win .ps1** - for people using Windows
 - **pkg-install-linux .sh** - for people running Linux


5. Add some code to that template and change things around.  
If you would like to run the template without your additions I have added an example of paginated help command, so you are able to run it before you start working on your new Discord bot and  check if everything works properly.
Youare also able to change the prefix of your new creation. Simply go to line 24 and swap the default **%** to whatever character (or set of two chars) of your liking.  

7. Start your newly created Ddiscord bot in terminal by using:  
**```node bot.mjs```**.

## Packages used in this template:

[Discord.js](https://discord.js.org/)  

[devraelfreeze's pagination module](https://www.npmjs.com/package/@devraelfreeze/discordjs-pagination)  

[dotenv](https://www.npmjs.com/package/dotenv)  

[pretty-ms](https://www.npmjs.com/package/pretty-ms)  

[nodemon](https://www.npmjs.com/package/nodemon)  

[node-fetch](https://www.npmjs.com/package/node-fetch)  


<hr>

if i messed something up either here in readme or in code feel free to  
 create PRs and fix any issues!

