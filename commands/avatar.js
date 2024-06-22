const { EmbedBuilder } = require("discord.js");
const { user } = require("discord.js");

module.exports ={
    description: 'Hace que muestre la imagen del usuario',
    run: async(message) =>{
        const target = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(target.id);

        if(!member) return message.reply("Introduce un usuario valido");

            const avatar = member.user.displayAvatarURL({size: 512})

            const embed = new EmbedBuilder()
            .setColor('Green')
            .setTitle(`Avatar de <@${member.user.displayName}>`)
            .setImage(avatar)

            message.reply({embeds: [embed]})
        
}
}