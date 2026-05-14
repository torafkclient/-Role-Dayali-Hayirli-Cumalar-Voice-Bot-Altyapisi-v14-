const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require("@discordjs/voice");
const path = require("path");

module.exports = (client) => {
  client.on("voiceStateUpdate", (oldState, newState) => {
    if (!newState.channel || newState.member.user.bot) return;

    const connection = joinVoiceChannel({
      channelId: newState.channel.id,
      guildId: newState.guild.id,
      adapterCreator: newState.guild.voiceAdapterCreator,
      selfDeaf: false
    });

    const player = createAudioPlayer();
    const resource = createAudioResource(path.join(__dirname, "welcome.mp3"));

    connection.subscribe(player);
    player.play(resource);

    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });
  });
};