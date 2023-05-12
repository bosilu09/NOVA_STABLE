const fs = require('fs');
const Dialogehi = "Assets/Ehi_files/Dialog_ehi/";
const Mobitelehi = 'Assets/Ehi_files/Mobitel_ehi/';
const Airtelehi = 'Assets/Ehi_files/Airtel_ehi/';
const Allnetehi = 'Assets/Ehi_files/All_ehi/';
const Hutchehi = 'Assets/Ehi_files/Hutch_ehi/';

module.exports = {
  name: "ehi",
  alias: ["ehhi","freeehi"],
  desc: "Sends Menu for Ehi.",
  cool: 3,
  react: "💉",
  category: "Misc",
  start: async (Miku, m, { pushName, args }) => {
    if (!args[0]) {
      return await m.reply("💉 -----𝙀𝙝𝙞 𝙈𝙚𝙣𝙪----- 💉\n\n𝐔𝐬𝐞 𝐬𝐮𝐢𝐭𝐚𝐛𝐥𝐞 𝐜𝐦𝐝 𝐭𝐨 𝐠𝐞𝐭 𝐄𝐡𝐢 𝐟𝐢𝐥𝐞𝐬\n\n✯ .ᴇʜɪ ᴍᴏʙɪᴛᴇʟ\n✯ .ᴇʜɪ ᴅɪᴀʟᴏɢ\n✯ .ᴇʜɪ ᴀɪʀᴛᴇʟ\n✯ .ᴇʜɪ ᴀʟʟ \n\n\n𝐆𝐞𝐭 𝐇𝐓𝐓𝐏 𝐈𝐍𝐉𝐄𝐂𝐓𝐎𝐑 𝐀𝐏𝐊\n\n _.ehi apk_\n\n❍ 𝐋𝐚𝐬𝐭 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝟐𝟎𝟐𝟑/𝟎𝟒/𝟎𝟕 ❍");
    } else if (args[0]){m.reply('ɪꜰ ꜰɪʟᴇꜱ ᴀʀᴇ ᴇxᴘɪʀᴇᴅ ᴊᴏɪɴ ᴏᴜʀ ɢʀᴏᴜᴘ \n\n ʟɪɴᴋ : https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw ')}
     if (args == 'apk' || args == 'Apk' || args== 'APK') {
      m.reply('*Please wait* \n\n_Uploading Http Injector Apk_')
      Miku.sendMessage(m.from,{document:{url:'Assets/Ehi_files/http_injector.apk'},
caption:'𝗡𝗢𝗩𝗔 𝗘𝗛𝗜 𝗚𝗥𝗢𝗨𝗣 : - \n\n https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw',
                    mimetype:'application/vnd.android.package-archive',fileName:'httpInjetor.apk'},{quoted:m});
    } else
    if (args == 'mobitel' || args == 'Mobitel') {
      /* Send files from Mobitelehi */
      fs.readdir(Mobitelehi, (err, files) => {
        if (err) {
          console.error(err);
          return m.reply("Error reading folder.");
        }
        files.forEach((file) => {
          const filepath = `${Mobitelehi}/${file}`;
          Miku.sendMessage(m.from, { document: { url: filepath }, mimetype: 'application/octet-stream',caption:'𝗡𝗢𝗩𝗔 𝗘𝗛𝗜 𝗚𝗥𝗢𝗨𝗣 : - \n\n https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw', fileName: file }, { quoted: m });
        });
      });
      
    } else     if (args == 'hutch' || args == 'Hutch') {
      /* Send files from Mobitelehi */
      fs.readdir(Hutchehi, (err, files) => {
        if (err) {
          console.error(err);
          return m.reply("Error reading folder.");
        }
        files.forEach((file) => {
          const filepath = `${Hutchehi}/${file}`;
          Miku.sendMessage(m.from, { document: { url: filepath }, mimetype: 'application/octet-stream',caption:'𝗡𝗢𝗩𝗔 𝗘𝗛𝗜 𝗚𝗥𝗢𝗨𝗣 : - \n\n https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw', fileName: file }, { quoted: m });
        });
      });
      
    } else if (args == 'dialog' || args == 'Dialog') {
      m.reply(`_Please kindly acknolwedge that most of the Ehi files may not work due to expiration_`)
      fs.readdir(Dialogehi, (err, files) => {
        if (err) {
          console.error(err);
          return m.reply("Error reading folder.");
        }
        files.forEach((file) => {
          const filepath = `${Dialogehi}/${file}`;
          Miku.sendMessage(m.from, { document: { url: filepath }, mimetype: 'application/octet-stream',
                            caption:'𝗡𝗢𝗩𝗔 𝗘𝗛𝗜 𝗚𝗥𝗢𝗨𝗣 : - \n\n https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw', fileName: file }, { quoted: m });
        });
      });
      
    } else if (args == 'airtel' || args == 'Airtel') {
      /* Send files from Airtelehi*/
       fs.readdir(Airtelehi, (err, files) => {
        if (err) {
          console.error(err);
          return m.reply("Error reading folder.");
        }
        files.forEach((file) => {
          const filepath = `${Airtelehi}/${file}`;
          Miku.sendMessage(m.from, { document: { url: filepath }, mimetype: 'application/octet-stream', fileName: file }, { quoted: m });
        });
      });
     
    } else if (args == 'all'||args == 'All') {
      
      fs.readdir(Allnetehi, (err, files) => {
        if (err) {
          console.error(err);
          return m.reply("Error reading folder.");
        }
        files.forEach((file) => {
          const filepath = `${Allnetehi}/${file}`;
          Miku.sendMessage(m.from, { document: { url: filepath }, mimetype: 'application/octet-stream',
                                    caption:'𝗡𝗢𝗩𝗔 𝗘𝗛𝗜 𝗚𝗥𝗢𝗨𝗣 : - \n\n https://chat.whatsapp.com/HgsHqrbXLsX0GzAwHjVAlw',fileName: file }, { quoted: m });
        });
      });
     
    } else {
      if (args == `test`) {
      Miku.sendMessage(m.from, { document: { url:`Assets/Ehi_files/Mobitel_ehi/fortest.ehi`  }, mimetype: 'application/octet-stream', fileName: `fortest.ehi` }, { quoted: m });
      return await m.reply(`Invalid argument: ${args}`);
    }
    m.reply(`If Ehi Files Doesnt Work Contact *_+94752891693_*`)
  
   
   }
  }
};
