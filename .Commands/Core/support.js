const botImage1 = 'https://example.com/botimage.jpg' // Replace with actual image URL
const suppL = 'https://chat.whatsapp.com/IqxD9FdxBxl12nAG4wzcWS' // Replace with actual support group link

module.exports = {
    name: "support",
    alias: ["supportgc","support"],
    desc: "Sends support group link.",
    cool: 3,
    react: "👨‍🏫",
    category: "Core",
    start: async (Miku, m, { pushName }) => {
        m.reply(`Check your DM *${pushName}*  !\n\nI have sent you the support group link personally.`)
        let botpic = botImage1
        let txt = `      🧣 *Support Group* 🧣\n\n*Inovatech* is an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*Thanks for using Atlas.*`
        await Miku.sendMessage(m.sender, { image: { url: 'https://graph.org/file/c5726b9e299f39a1038eb.jpg' }, caption: txt }, { quoted: m })
    }
}
