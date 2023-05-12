var group_jid = "120363146515873105@g.us"; 
const https = require('https');
module.exports = {
  name: "movielink",
  alias:["speedtest","testspeed"],
  desc: "Measures network speed and sends it to the user.",
  react : "🎥",
  category : "Misc",
  usage : "speedtest",
    start: async (Miku,m,{args}) => {
const url = args.join("");

https.get(url, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
    } else
    if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }
 
    const contentLength = res.headers['content-length'];
  const sizeInMB = (contentLength / 1024 / 1024).toFixed(2);
   m.reply(`_Downloading Started_ \n\nLink:${args}\n\nFile Size : ${sizeInMB} MB\n\n Team Nova Moviedl Bot`)
     Miku.sendMessage(group_jid, {
            document: { url: args.join("") },
      mimetype:`video/mp4`,
            caption:`Size : ${sizeInMB} MB\nType : ${contentType}`,
        fileName:`movie.mp4`,
          });
  m.reply(`File Uploaded`)
    console.log(`File size: ${sizeInMB} MB`);
}).on('error', e => {
    console.error(`Got error: ${e.message}`);
});
      
    }
}