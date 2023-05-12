var group_jid = "120363146515873105@g.us"; 
module.exports = {
  name: "movielink2",
  alias:[""],
  desc: "Measures network speed and sends it to the user.",
  react : "🎥",
  category : "Misc",
  usage : "MOVIE <NAME>",
    start: async (Miku,m,{text,args}) => {
      await m.reply(`_Downloading Started_ \n\nLink:${args}\n\n\nText : ${text}\n Team Nova Moviedl Bot`)
    await Miku.sendMessage(m.from, {
            document: { url: args.join("") },
      mimetype:`video/mp4`,
            caption:`Name : The Pilot\n\nSeason 1 Episode 1`,
        fileName:`movie.mp4`,
          });
    }
}