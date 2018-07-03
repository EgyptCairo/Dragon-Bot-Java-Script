const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`I will be soon !`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





  client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('التاج الخاص بحسابك:',"#" +  `**${mentionavatar.discriminator}**`, true)
   .addField("الايدي الخاص بحسابك:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("تم انشاء حسابك في :", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





var refix = '-';
client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
  }
  });



client.on('message', message => {
  if (message.content === "-inv") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .setTitle(`:small_orange_diamond:اضغط هنا `)
  .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=463099813114937344&permissions=8&scope=bot`)
  .setThumbnail(message.author.avatarURL)
  .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
message.channel.sendEmbed(embed);
 }
});



client.on('message', message => {
  if (message.content === "-bot") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .addField(`عدد السيرفرات:${client.guilds.size}`,`عدد المستخدمين:${client.users.size}`)
  .setThumbnail(message.author.avatarURL)
  .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
message.channel.sendEmbed(embed);
 }
});





client.on('message', message => {
if (message.content.startsWith('-support')){
     let ra3d = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .setDescription(" سيرفر الدعم الفني الخاص ب دراجون بوت :- https://discord.gg/wyMhrNw  ")
     
     
  message.channel.sendEmbed(ra3d);
    }
});




client.on('guildCreate', guild => {
  client.channels.get("463703228052275210").send(`**سيرفر جديد قد اضاف البوت ✅
اسم السيرفر : __${guild.name}__
صاحب السيرفر: __${guild.owner}__**`)
});




client.on('message',async message =>{ 
     var prefix = "-";
    let args = message.content.split(' ').slice(1).join(" ");
    if(message.content.startsWith(prefix + "say")) {
        if(!args) return message.reply('اكتب الكلام اللذي تريد البوت ان يكرره');
        message.channel.send(args);
    }
});



var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




client.login(process.env.BOT_TOKEN);
