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
        let txt = "*_Bot is Developing_*\n_State : 45%_"
        await Miku.sendMessage(m.from, { image: { url: 'https://graph.org/file/27054bdb82718a29de80c.png' }, caption: txt }, { quoted: m });
    }
}
