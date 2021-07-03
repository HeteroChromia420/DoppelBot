const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'globalban',
	description: 'Ban a user',
	userpermissions: 'BAN_MEMBERS',
	execute(message, args, client) {
		if (!message.author.id === '332148103803174913') return;
		if (!args.length) {
			return message.channel.send(`Mention a user you want to ban!`);
		}
		if (args.length === 1) {
			return message.channel.send(`Provide a reason!`)
		}
		client.guilds.cache.forEach(g => {
		id = g.id;
		const guildconf = JSON.parse(fs.readFileSync('./guilds/' + id + '.json'));
		console.log(guildconf.global_bans);
		if (guildconf.global_bans === "inactive") return;
		async function ban() {
		user = await client.users.fetch(args[0]);
		var reason = "Global Ban: ";
            for(i = 1; i < args.length; i++){
                var arg = args[i] + " "; 
                reason = reason + arg;
			}
	try {
		g.members.ban(user, {reason: reason})
		message.react('✅');
	} catch (error) {
		 return message.channel.send(`Failed to ban **${user.tag}**: ${error}`);
	};
		};
		ban();
		});
	},
};