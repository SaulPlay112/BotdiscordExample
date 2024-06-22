const {Client,Events, MembershipScreeningFieldType, WelcomeChannel} = require ("discord.js");
const client = new Client({
    intents: 3276799
});

client.on(Events.ClientReady, async (client) =>{
    console.log(`Conectado como ${client.user.username}`)
})
client.on(Events.MessageCreate,async (message)=>{
if (message.author.bot)return;// para elimninar bucles si el bot manda mensajes
if(!message.content.startsWith('-'))return;// para que todo mensaje empiece con el prefix -
const args = message.content.slice(1).split(' ')[0] // el conteindo del mensaje menos 1 caracter "es decir el prefix (-)"
// command handler
try{
    const command = require (`./commands/${args}`);
    command.run(message);

}catch (error){
    console.log(`Ha ocurrido un error al utilizar el comando -${args}`,error.message);
}
})

client.on(Events.GuildMemberAdd, async (Member)=>{
    const welcomeChannelId = '1156749558655746163';
    const channel = await client.channels.fetch(WelcomeChannelId);

    channel.send(`**<@${member.user.id}> Bienvenido al canal!**`);
})

client.login(" your token discord bot")