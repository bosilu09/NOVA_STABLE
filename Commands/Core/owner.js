const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "owner",
  desc: "To view the list of current Mods",
  alias: ["modlist", "mods", "mod"],
  category: "Core",
  usage: "owner",
  react: "🧑‍💻",
  start: async (Miku, m, { text, prefix }) => {
    try {
      var modlist = await mku.find({ addedMods: "true" });
      var modlistString = "";
      var ownerList = global.owner;
      modlist.forEach((mod) => {
        modlistString += `\n@${mod.id.split("@")[0]}\n`;
      });
      var mention = await modlist.map((mod) => mod.id);
      let xy = modlist.map((mod) => mod.id);
      let yz = ownerList.map((owner) => owner + "@s.whatsapp.net");
      let xyz = xy.concat(yz);

      ment = [ownerList.map((owner) => owner + "@s.whatsapp.net"), mention];
      let textM = `    🥷  *${botName} 𝙼𝙾𝙳𝚂*  🥷\n\n`;

      if (ownerList.length == 0) {
        textM = "*No Mods Added !*";
      }

      for (var i = 0; i < ownerList.length; i++) {
        textM += `\n〽️ @${ownerList[i]}\n`;
      }

      if (modlistString != "") {
        for (var i = 0; i < modlist.length; i++) {
          textM += `\n🥷 @${modlist[i].id.split("@")[0]}\n`;
        }
      }

      if (modlistString != "" || ownerList.length != 0) {
        textM += `\n\n📛 *𝙳𝚘𝚗'𝚝 𝚂𝚙𝚊𝚖 𝚝𝚑𝚎𝚒𝚛 𝚒𝚗𝚋𝚘𝚡𝚎𝚜 𝚝𝚘 𝚊𝚟𝚘𝚒𝚍 𝚋𝚕𝚘𝚌𝚔𝚒𝚗𝚐' !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using ${botName}. 💫*\n`;
      }

      return Miku.sendMessage(
        m.from,
        { image : {url:"https://graph.org/file/27054bdb82718a29de80c.png"},
        caption: textM, 
        mentions: xyz },
        { quoted: m }
      );
    } catch (err) {
      console.log(err);
      return Miku.sendMessage(
        m.from,
        { text: `An internal error occurred while fetching the mod list.` },
        { quoted: m }
      );
    }
  },
};
