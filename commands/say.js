const { Message } = require("discord.js");

module.exports ={
    description: 'Repite los argumentos dados',
    run: async(message) =>{
        const args = message.content.split(' ').slice(1).join(' ');
        if(args.lenght < 1) return message.reply('Prove un argumento valido.');
        message.reply(args);
}
}