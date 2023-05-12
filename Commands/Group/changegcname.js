module.exports = {
  name: "setgcname",
  alias: ["setnamegc", "changegcname", "setgroupname", "changegroupname"],
  desc: "Change the group name",
  category: "Group",
  usage: `setgcname <New group name>`,
  react: "🎛",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args, mime }
  ) => {m.reply("NSFW is removed by NOVA MD Devs 🥷")
  },
};
