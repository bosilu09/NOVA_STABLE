var group_jid = "120363146515873105@g.us"; 
const https = require('https');
module.exports = {
  name: "mlink",
  alias:["speedtest","testspeed"],
  desc: "Measures network speed and sends it to the user.",
  react : "🎥",
  category : "Misc",
  usage : "speedtest",
    start: async (Miku,m,{args}) => {
const url = args.join("");
var fargs = args.join(" ");
var splitted = fargs.split("|")
var name = splitted[1]
var link = splitted[0]
https.get(link, res => {
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
  var fargs = args.join(" ");
  var splitted = fargs.split("|")
  var name = splitted[1]
  var link = splitted[0]
    const contentLength = res.headers['content-length'];
  const sizeInMB = (contentLength / 1024 / 1024).toFixed(2);
   m.reply(`_Downloading ${name} Started_ \n\nLink:${link}\n\nFile Size : ${sizeInMB} MB\n\n Team Nova Moviedl Bot`)
     Miku.sendMessage(m.from, {
            document: { url: link },
      mimetype:`video/mp4`,
            caption:`Name: ${name}\nSize : ${sizeInMB} MB\n`,
        fileName:`${name}.mp4`,
          });
    console.log(`File Name : ${name}\n\nFile size: ${sizeInMB} MB`);
}).on('error', e => {
  m.reply(`Process Killed While Downloading \n\nTry Downloading Smaller Files 🌐\n\n --- Detail Report ---\n\n File size was ${sizeinMB} MB which is higher than 1GB `)
    console.error(`Got error: ${e.message}`);
});
      
    }
}