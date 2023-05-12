const gis = require("g-i-s");

module.exports = {
  name: "gr9history",
  alias: ["gr9hist"],
  desc: "To get google image search result",
  category: "EduGuru",
  usage: `gig <search term>`,
  react: "👁️‍🗨️",
  start: async (Miku, m, { text, prefix, args }) => {
    
    Miku.sendMessage(m.from, { text: `Searching Quiz data 🧑‍🔧 ` });
    
      let maintext = `නවය වසර ඉතිහාසය විශය සදහා වූ Quizes පහත දැක්වේ 🖋️

    පලවෙනි පාඩම
    -------------
Link :-https://forms.office.com/r/vhaRzAd9JV

කාලය මිනිත්තු 10යි \n \n ᴄʟɪᴄᴋ ʙᴀᴄᴋ ᴛᴏ ᴏᴘᴇɴ ᴍᴇɴᴜ ᴀɢᴀɪɴ`;

      let buttons = [
        {
          buttonId: `.grade9`,
          buttonText: { displayText: "⬅️ Back" },
          type: 1,
        },
      ];
      await Miku.sendMessage(
        m.from,
        {
          image: {
      url:'https://graph.org/file/90395acb87615684138eb.jpg' ,
          },
          caption: maintext,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        },
        { quoted: m }
      );
  },
};
