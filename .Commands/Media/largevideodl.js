const YT = require("../../lib/ytdl-core.js");
const yts = require("youtube-yts");

module.exports = {
  name: "largeytdl",
  alias: ["lyt"],
  desc: "To download a song as mp4 from YouTube link",
  cool: 30,
  category: "Media",
  usage: `ytvd <song link>`,
  react: "✨",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a YouTube Video link !`},
        
        { quoted: m }
      );
    Miku.sendMessage(m.from, { text: `📥 Dᴏᴡɴʟᴏᴀᴅɪɴɢ Vɪᴅᴇᴏ 📥 ` }, { quoted: m });
    let videoUrl = text;
    let videoId = videoUrl.split("v=")[1];
    let search = await yts(text);

    yts({ videoId })
      .then((result) => {
        const length = result.seconds;

        if (length >= 180000) {
          return m.reply(
            "Command Rejected! The video is more than 30 minutes long "
          );
        } else {
          const ytaud =  YT.mp4(text).then((file) => {
          Miku.sendMessage(
            m.from,
            {
              video: { url: file.videoUrl },
              caption:`${search.all[0].title} By: *Inovatech Bot*`,
            },
            { quoted: m }
          );
        });
          Miku.sendMessage(
        m.from,
        { text: `📤 Uᴘʟᴏᴀᴅɪɴɢ Vɪᴅᴇᴏ 📤` });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
