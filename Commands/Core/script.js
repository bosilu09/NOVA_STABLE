const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "🛑",
    category: "Core",
    start: async (Miku, m, { pushName, prefix }) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = "Bot is not released to public yet. Project by SL Tech Zone."
        await Miku.sendMessage(m.from, { image: { url: 'https://graph.org/file/c5726b9e299f39a1038eb.jpg' }, caption: txt }, { quoted: m });
    }
}
