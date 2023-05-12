const fetch = require('node-fetch')
module.exports = {
  name: "search",
  alias: [""],
  desc: "Say hello to bot.",
  react: "⭐",
  category: "Core",
  start: async (Miku, m, { pushName, prefix,args,text }) => {
const apiKey = '9ab0b5fb';
    if (!args[0]) {
      m.reply(`Query Cannot  Empty`)
      console.log(`Empty Search is Given : Skipped`)
      return;
    }
    m.reply(`Sending Results to Nova Film group ${args}`)
const movieTitle = `${text}`;
let title;

fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
   const title = data.Title;
    const date = data.Released;
    const duration = data.Runtime;
    const category = data.Genre;
    const rating = data.imdbRating;
    const plot = data.Plot;
    const img = data.Poster;
    console.log(title);
    console.log(date)
    console.log(duration)
    console.log(category)
    console.log(rating)
    console.log(plot)
    console.log(img)
    
  Miku.sendMessage(
       `120363146515873105@g.us`,
      {
        image: {
          url: `${img}`, 
        },
        caption: `❍ 𝐍𝐎𝐕𝐀 𝐅𝐢𝐥𝐦 𝐆𝐫𝐨𝐮𝐩 ❍

✒️ ᴛɪᴛʟᴇ : _${title}_

🗞️ ʀᴇʟᴇᴀꜱᴇᴅ ᴏɴ : _${date}_

📟 ᴅᴜʀᴀᴛɪᴏɴ : _${duration}_

🗂️ ᴄᴀᴛᴇɢᴏʀʏ : _${category}_

📊 ʀᴀᴛɪɴɢꜱ : _${rating}_

📃 ᴘʟᴏᴛ : ${plot}
        
ⁱⁿᵒᵛᵃᵗᵉᶜʰ ᴮᵒᵗ | ᵀᵉᵃᵐ ᴺᴼⱽᴬ   ` ,
      },
    );
    
  });
  }
}