const Discord = require('discord.js');
module.exports = {
	name: 'globalunban',
	description: 'Ban a user',
	userpermissions: 'BAN_MEMBERS',
	execute(message, args, client) {
		if (!message.author.id === '332148103803174913') return;
		if (!args.length) {
			return message.channel.send(`Mention a user you want to unban!`);
		}
		client.guilds.cache.forEach(g => {
		id = g.id;
		const guildconf = JSON.parse(fs.readFileSync('./guilds/' + id + '.json'));
		if (guildconf.global_bans === "inactive") return;
		const user = args[0];
	try {
		g.members.unban(user);
		message.react('✅');
	} catch (error) {
		 return message.channel.send(`Failed to unban **${user.tag}**: ${error}`);
	};
		});
	},
};