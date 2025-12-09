# Welcome in complex guide to this template!


### What is it?

i made this template  to help others develop their own working yet  
simple  discord bots contained in single  .mjs file.
it is not the greatest one  and when you would like make something bigger  
i highly recommend to refactorise this code  as it might get hard to debug it while whole code is whithin single file (speaking from experience. i have private project which grew up to over 1k lines of code and it is really hard to move arounnd it and debug certain functions if they stop work)  

### Quickstart Guide
1. Copy contents of this folder to new empty directory .

2. Find your app token - go to [discord.dev](https://discord.com/developers/applications) and make new  application (if you dont have one made already). Click on it and  find **Bot** section on the left panel of the developer portal, then you should see **Token** section. If you do not see your  token already clock **Reset Token** button.  

3. Paste your token into **.env** file as follows:  

**```token=[your token goes here]```** 

4. instal sesscessary packages using proper script:  
 - **pkg-install-win .ps1** - for people using windows
 - **pkg-install-linux .sh** - for people running  linux


5. add up some code to that template and change things around.  
If you would like  run template without your additions i have  
added example of paginated help command   so you are able to  
run it before you start working on your new discord bot  and  
check if everything works properly. You  are also able to change  
prefix of your new creation. Simply go to line 24 and  swap  
default **%** to whatever character (or set of two chars) of your liking.  

6. start your newly created discord bot in terminal by using:  
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

