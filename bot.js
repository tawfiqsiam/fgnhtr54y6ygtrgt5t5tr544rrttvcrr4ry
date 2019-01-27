const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**ولكم نورت السيرفر
 welcome to Nasa Server__**__** 
 ${member}  
 `) 
}).catch(console.error)
})






client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === '፨─chat');////اسم الشات
 
  if (!channel) return;

  channel.send(`**welcome to __KilS CommunitY :heart:️__**, ${member}`);
})


const invites = {};////ده كود تم دعوتك بواسطة

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "፨─chat");////اسم الشات
    logChannel.send(` **Invited by:** <@${inviter.id}>`);
  });

});


 client.on('guildMemberRemove', member => {///ده لما حد يخرج
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setDescription(`**مع السلامه تشرفنا بك ✋😔**`)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
   
    var channel =member.guild.channels.find('name', '፨─chat')///اسم الشات
    if (!channel) return;
    channel.send({embed : embed});
    })



client.login(process.env.BOT_TOKEN);
 
