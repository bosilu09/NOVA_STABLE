const YT = require("../../lib/ytdl-core.js");
const fs = require("fs");
const yts = require("youtube-yts");

module.exports = {
  name: "song",
  alias: ["ytplay", "play"],
  desc: "To play a song from youtube",
  category: "Media",
  usage: `play <song name>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    try {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a song name to play !\n\nExample :\n.song Night changes by one direction` },
          { quoted: m }
        );
      const songSerachTerm = args.join(" ");
      const songInfo = await yts(songSerachTerm);
      const song = songInfo.videos[0];
      let videoUrl = song.url;
      let videoId = videoUrl.split("v=")[1];
Miku.sendMessage(m.from,{text:`_${song.title}_`})
      await Miku.sendMessage(
        m.from,
        {
          image: { url: song.thumbnail },
          caption: `\n*ꜱᴏɴɢ ɴᴀᴍᴇ :* _${song.title}_

*ᴅᴜʀᴀᴛɪᴏɴ :* _${song.timestamp}_

*ᴜʀʟ :* _${song.url}_


_*🥷 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...*_\n\n`,
        },
        { quoted: m }
      );

      yts(videoId).then((result) => {
        const length = result.seconds;

        if (length >= 1800) {
          return m.reply(
            "Command Rejected! The audio is more than 30 minutes long! "
          );
        } else {
          const ytaud = YT.mp3(videoId).then((file) => {
            Miku.sendMessage(
              m.from,
              {
                audio: fs.readFileSync(file.path),
                mimetype: "audio/mpeg",
              },
              { quoted: m }
            );
            fs.unlinkSync(file.path);
          });
        }
      });
    } catch (err) {
      console.error(err);
      Miku.sendMessage(
        m.from,
        { text: `Failed to play the song: ${err.message}` },
        { quoted: m }
      );
    }
  },
};