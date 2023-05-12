const gis = require("g-i-s");

module.exports = {
  name: "grade9",
  alias: ["grade9"],
  desc: "To get google image search result",
  category: "EduGuru",
  usage: `gig <search term>`,
  react: "👁️‍🗨️",
  start: async (Miku, m, { text, prefix, args }) => {
    
    Miku.sendMessage(m.from, { text: `EduGuru is Activated 🧙‍♂️ ` });
    
      let maintext =` නවය ශ්‍රේණිය සදහා වූ Quizez පහත දැක්වේ

අවශ්‍ය විශය උඩ එක පාරක් ඔබන්න 👨‍🏫 \n \n Select one below to continue`;

      let buttons = [
        {
          buttonId: `.gr9hist`,
          buttonText: { displayText: "ඉතිහාසය" },
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
