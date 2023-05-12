const { mk } = require("../../Database/dataschema.js");

module.exports = {
    name: "antilinkgc",
    alias: ["alinkgc","antilink"],
    desc: "Enable or disable the antilink feature in a group",
    category: "Group",
    usage: "antilinkgc [on/off]",
    react: "🔒",
    start: async (
      Miku,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName }
    ) => {
      
        Miku.sendMessage(
          m.from,
          {
            text: `[---- Antilink Menu ----]\n\n *Usage :-*\n_.antilink on_ - to turn on antilink\n_.antilink off :-_to turn off antilink`,
          },
          { quoted: m }
        );
      
        if (!isAdmin && !isBotAdmin)
        return Miku.sendMessage(
          m.from,
          {
            text: `Bot and *${pushName}* both must be admin in order to use this command !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Miku.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });
  
      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "true" }).save();
          Miku.sendMessage(
            m.from,
            {
              text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Miku.sendMessage(
            m.from,
            { text: `*Successfully activated antilink*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "true")
            return Miku.sendMessage(
                m.from,
                { text: `*Already activated.*` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { antilink: "true" });
          return Miku.sendMessage(
            m.from,
            { text: `*Antilink is enabled in this group*` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, antilink: "false" }).save();
          return Miku.sendMessage(
            m.from,
            { text: `*Successfully deactivated antilink*` },
            { quoted: m }
          );
        } else {
          if (checkdata.antilink == "false") return Miku.sendMessage(
            m.from,
            { text: `*Already deactivated.*` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { antilink: "false" });
          return Miku.sendMessage(
            m.from,
            { text: `*Antilink is disabled in this group*` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}antilinkgc on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}antilinkgc off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage6} ,
          caption: `\n*「  Group Antilink configuration  」*\n\n.antilink on _To activate Antilink to this Group_\n.antilink off _To Deactivate Antilink from this group_`,
          footer: `*${botName}*`,
        };
        await Miku.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};