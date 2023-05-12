module.exports = {
  name: "list",
  alias: ["img"],
  desc: "Say hello to bot.",
  react: "⚙️",
  category: "Core",
  start: async (Miku, m, { pushName, prefix }) => {
    
    };
    
    await Miku.sendMessage(
      m.from,
      {
        image: {
          url: "https://graph.org/file/d873e0c62f139425a092c.jpg",
        },
        caption: '*[------------MENU------------]*\n\n__' ,
      },
      { quoted: m }
    );
  },
    

  
};
