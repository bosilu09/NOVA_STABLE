const Client = require('ssh2').Client;
const net = require("net");

module.exports = {
  name: "ssh",
  alias: ["varifyssh"],
  desc: "Say hello to bot.",
  react: "👾",
  category: "Core",
  start: async (Miku, m, { pushName, prefix,args,text }) => {
    const conn = new Client();
    const server = net.createServer();
    if (!args[0]) {
      m.reply(`Query Cannot br Empty`)
      m.reply(`💥SSH DETAILS ARE EMPTY💥\n\nExample: .ssh ip|port|username|password`)
      return;
    }

    async function checksshpass(ip,port,username,password){
      // connect to the SSH server using your credentials
             conn.connect({
               host: ip,
               port: port || 444, // or the port you specified when creating your account
               username: username,
               password: password
             });
             
             
             // check if the connection is still active
             conn.on('ready', () => {
               m.reply(`_Username is Correct_ ✨\n_Password is Correct_ ✨\n_Port is Correct_ ✨`)
               conn.end();
             });
             
             conn.on('error', (err) => {
               m.reply(`❌ _*Authenticating Failed*_ \n\n💠 ʀᴇᴀꜱᴏɴ : ${err.message}\n\nTry Again after checking Username and Password`);
             });
             }
      /* ------------------------------------------------------------------------------------------------ */
    async function checkserverstatus(ip,port,username,password){
      const sshServer = ip;
      const sshPort = 22;
      
      const client = net.createConnection(sshPort, sshServer,async () => {
        await m.reply(`*_SSH Server Is Active_* ✅`);
        await m.reply(`🧩 *ᴄᴏɴɴᴇᴄᴛɪɴɢ ᴛᴏ _${ip}_* 🧩\n\n🎛 ᴘᴏʀᴛ : ${port}\n\n⭐ᴜꜱᴇʀɴᴀᴍᴇ : ${username}\n\n📄 ᴘᴀꜱꜱᴡᴏʀᴅ : ${password}`);
        await checksshpass(ip,port,username,password)


        client.end();
      });
      
      client.on('error', async (err) => {
       await m.reply(`❌ 𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙞𝙤𝙣 𝙁𝙖𝙞𝙡𝙚𝙙 \n\n💠 ʀᴇᴀꜱᴏɴ : ${err.message}`);
        return;
      });
      
      }   






        const x = args.join(" ");
        var detailsarg = x.replace(/\s/g, '');
      const [ip, port, username, password] = detailsarg.split("|");
      
      console.log(ip); // sg1.net
      console.log(port); // 444
      console.log(username); // bosilu09
      console.log(password); // myylffgf

await m.reply(`↪ _*Connecting to SSH Server*_ `)

await checkserverstatus(ip,port,username,password)

  },
}
