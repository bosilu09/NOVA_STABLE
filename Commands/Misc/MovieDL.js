var group_jid = `120363146515873105@g.us`;
module.exports = {
  name: "movie",
  alias:["speedtest","testspeed"],
  desc: "Measures network speed and sends it to the user.",
  react : "🎥",
  category : "Misc",
  usage : "speedtest",
    start: async (Miku,m) => {
      await m.reply(`Sending Files to _NOVA FILMS Groups_\nPowered by Team NOVA`)
    await Miku.sendMessage( group_jid, {
            document: { url: `https://www85.uptobox.com/dl/_SuDlOtyMzmf8HfIzoOyJFLVbtkI5ga0f5JwgB-7-nPTzHPqWOJcyw_a1ttqVlJljYl9jJrayrwIoQjtqUnH_d1u1_JMv0ysmbmq8AEH5Y49JIRudjOGCDe93FN6Xnnq/The%20Mandalorian%20S01E01%20%5B480p%5D%20Web-Dl.mp4` },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
      await Miku.sendMessage(group_jid, {
            document: { url: `https://www63.uptobox.com/dl/Sw9zoCanddD5AWKLxArs5NV6bhHuGIKXj8HgIZ5afDxAoIpubOdmtMOjNXqGZ4VT4e2Qm0wuM74BNy_elcImo-TMmR64r603RIdmxfGMUfi4ZyPr8vOo6peT7j0u7wFR/The%20Mandalorian%20S01E03%20%5B480p%5D%20Web-Dl.mp4` },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
      await Miku.sendMessage(group_jid, {
            document: { url: `https://files011.tusdrive.com/8W5c?download_token=04bacbf4e2b0368571e79815ce04fcd49b294748e74ec69c17f4ad5d3fe2d855` },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
      await Miku.sendMessage(group_jid, {
            document: { url: `https://files011.tusdrive.com/4K71?download_token=83f080e4de407c0a0bd3a1396b6d932e43f6770dd3bd4658219531dae97c6a17` },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
      await Miku.sendMessage(group_jid, {
            document: { url: `https://files011.tusdrive.com/4Kab?download_token=45483008c3a08a2e04a030e9d4711d6ec278deff11b9e2d9fd9ab45d46632ae4` },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
      await m.reply(`Succesfully Sent the Movies \n\nTeam NOVA movieDL Bot`)
    }
}