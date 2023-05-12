const YT = require("../../lib/ytdl-core.js");
const fs = require("fs");
const yts = require("youtube-yts");

module.exports = {
  name: "video",
  alias: ["ytvideo"],
  desc: "To play a video from youtube",
  category: "Media",
  usage: `video <song name>`,
  react: "🎥",
  start: async (Miku, m, { text, prefix, args }) => { 
    m.reply(`There was an error while searching`)
  },
};