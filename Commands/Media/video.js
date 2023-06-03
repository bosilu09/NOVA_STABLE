const yts = require('youtube-yts');
const ytdl = require('./../../Assets/ytdl-core');
const fs = require('fs');

module.exports = {
  name: "video",
  alias: ["ytplay", "ytv"],
  desc: "To play a song from youtube",
  category: "Media",
  usage: `play <song name>`,
  react: "🎵",
  start: async (Miku, m, { text, prefix, args }) => {
    
async function sendDownload(){
  console.log(`Sending Download....`)
  await Miku.sendMessage(m.from,{
    video:{url:`${args}.mp4`},
    caption:`🥷 ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ɴᴏᴠᴀ ᴍᴅ ʙᴏᴛ 🥷`
  },{quoted:m});
  fs.unlinkSync(`${args}.mp4`)
    }

async function downloadFirstResult(query) {
  const songSerachTerm = args.join(" ");
  const songInfo = await yts(songSerachTerm);
  const song = songInfo.videos[0];
  let videoUrl = song.url;
  let videoId = videoUrl.split("v=")[1];

  const duration = `${song.duration}`;
  const match = duration.match(/\d+/);
  
 
const extractedDuration = match[0];
const numberduration =  Number(extractedDuration);
console.log(numberduration);


if ( numberduration > 1800 ){
  console.log("Song Downloading Failed : Too large Duration")
 return;
}
 

  const searchResults = await yts.search(query);
  const firstResult = searchResults.videos[0];
  console.log(`Downloading: ${firstResult.title}`);
  const videoStream = ytdl(firstResult.url);
  videoStream.pipe(fs.createWriteStream(`${args}.mp4`));
}

async function prefunctions(){
  const songSerachTerm = args.join(" ");
  const songInfo = await yts(songSerachTerm);
  const song = songInfo.videos[0];
  let videoUrl = song.url;
  let videoId = videoUrl.split("v=")[1];

  const duration = `${song.duration}`;
  const match = duration.match(/\d+/);
  
 
const extractedDuration = match[0];
const numberduration =  Number(extractedDuration);
console.log(numberduration);


  await Miku.sendMessage(
    m.from,
    {
      image: { url: song.thumbnail },
      caption: `\n*ꜱᴏɴɢ ɴᴀᴍᴇ :* _${song.title}_

*ᴅᴜʀᴀᴛɪᴏɴ :* _${song.timestamp}_

*ᴜʀʟ :* _${song.url}_


_*🥷 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ...*_\n\n`,
    },
    { quoted: m }
  );
  if ( numberduration > 1800 ){
    console.log("Song Downloading Failed : Too large Duration")
    m.reply(`💥 𝐅𝐢𝐥𝐞 𝐢𝐬 𝐓𝐨𝐨 𝐋𝐚𝐫𝐠𝐞 𝐭𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 💥 \n\n The song you tried to download is exceeding the download limit of 30 minute 👀\n\n ◉ The song you tried to download is ${song.timestamp} > 30:00 . Please kindly notice that these limits are put on to stop community from violating Whatsapp's Policy and getting Banned \n\nThank You 🤗 ,\nNOVA Bot Dev `)
    return;
  }
 
}




await prefunctions();
await downloadFirstResult(`${args.join(" ")}`);

/*Do NOT EDIT BELOW PART AT ANY REASON AT ALL*/
const songSerachTerm = args.join(" ");
const songInfo = await yts(songSerachTerm);
const song = songInfo.videos[0];
let videoUrl = song.url;
let videoId = videoUrl.split("v=")[1];

const duration = `${song.duration}`;
const match = duration.match(/\d+/);


const extractedDuration = match[0];
const numberduration =  Number(extractedDuration);
console.log(numberduration);

if ( numberduration > 1800 ){
console.log("Song Downloading Failed : Too large Duration")
return;
} else 

setTimeout(() => {

 sendDownload()
}, 4000);
    }
};
