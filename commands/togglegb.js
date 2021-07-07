const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'togglegb',
  description: 'Toggle filter',
  userpermissions: 'ADMINISTRATOR',
	 execute(message) {
		 id = message.guild.id;
	const guildconf = JSON.parse(fs.readFileSync('./guilds/' + id + '.json'));
	console.log(guildconf);
	if (guildconf.global_bans == "inactive") {
		var stream = fs.createWriteStream('./guilds/' + id + '.json');
		stream.once('open', (fd) => {
		stream.write("{\n");
		stream.write(`"aa": "` + guildconf.aa +`",\n`);
		stream.write(`"mentions": "` + guildconf.mentions +`",\n`);
		stream.write(`"other": "` + guildconf.other +`",\n`);
		stream.write(`"prefix": "` + guildconf.prefix +`",\n`);
		stream.write(`"filter": "` + guildconf.filter +`",\n`);
		stream.write(`"global_bans": "active"\n`);		
		stream.write("}");
		stream.end();
});
	const guildnewconf = JSON.parse(fs.readFileSync('./guilds/' + id + '.json'));
	message.reply('Global Bans are now **on**!');
	}
	if (guildconf.global_bans == "active") {
		var stream = fs.createWriteStream('./guilds/' + id + '.json');
		stream.once('open', (fd) => {
		stream.write("{\n");
		stream.write(`"aa": "` + guildconf.aa +`",\n`);
		stream.write(`"mentions": "` + guildconf.mentions +`",\n`);
		stream.write(`"other": "` + guildconf.other +`",\n`);
		stream.write(`"prefix": "` + guildconf.prefix +`",\n`);
		stream.write(`"filter": "` + guildconf.filter +`",\n`);
		stream.write(`"global_bans": "inactive"\n`);		
		stream.write("}");
		stream.end();
});
	const guildnewconf = JSON.parse(fs.readFileSync('./guilds/' + id + '.json'));
	message.reply('Global Bans are now **off**!');
	}	
	},
};