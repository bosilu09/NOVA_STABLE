const YT = require("../../lib/ytdl-core.js");
const fs = require("fs");
const yts = require("youtube-yts");

module.exports = {
  name: "sendmet",
  alias: ["ytplay", "play"],
  desc: "To play a song from youtube",
  category: "Media",
  usage: `play <song name>`,
  react: "🎵",
  start: async (Miku, m, { text, prefix, args, }) => {
    m.reply(`There was an error while searching`)
    Miku.sendMessage(
              m.from,
              {
                document:{url:`https://d.cd33lk.workers.dev/1:/CSMovies/The.Last.of.Us.S01E01.HMAX.WEBRip-%5BCineSubz.co%5D-480p.mp4`},
                fileName : `Error 404.txt`,
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
                contextInfo: {
                  externalAdReply: {
                    title: `title`,
                    body: `Description`,
                    mediaType: 2,
                    thumbnail: {url:`https://graph.org/file/c5726b9e299f39a1038eb.jpg`},
                    mediaUrl:`https://youtu.be/69fn68cGzP0`
                  }
                }
              },
              { quoted: m }
            );
            
  },
};
