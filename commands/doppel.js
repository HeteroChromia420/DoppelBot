const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'doppel',
  description: 'Get a random picture of Doppel',
	execute(message) {
	const responses = JSON.parse(fs.readFileSync('./responses.json'));
    const imageFolder = "./images/";

    fs.readdir(imageFolder, (err, doppel_imgs) => {

      if(err) {
        console.log(err)
      }

      let randomIndex = Math.floor(Math.random() * doppel_imgs.length);
      let randomImage = './images/' + doppel_imgs[randomIndex];
      let doppelmsg = responses.doppel_responses;

      message.channel.send(doppelmsg[Math.floor(Math.random() * doppelmsg.length)], {
        files: [randomImage]
      });
          message.delete().catch();
  });

   
},
};
