const { 
  Client, 
  GatewayIntentBits 
} = require("discord.js");

const { 
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus
} = require("@discordjs/voice");

const path = require("path");
const settings = require("./Settings.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} aktif!`);

  const guild = client.guilds.cache.get(settings.guild);
  const channel = guild.channels.cache.get(settings.channels[0]);

  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
  });

  const player = createAudioPlayer();

  // 🎵 LOOP FONKSİYONU
  const playAudio = () => {
    const resource = createAudioResource(
      path.join(__dirname, settings.file)
    );

    player.play(resource);
    console.log("🎵 Welcome çalıyor...");
  };

  // ilk başlat
  playAudio();

  connection.subscribe(player);

  // bittiğinde tekrar başlat (LOOP)
  player.on(AudioPlayerStatus.Idle, () => {
    console.log("🔁 tekrar çalınıyor...");
    playAudio();
  });
});

client.login(settings.token);