module.exports = {
  name: "hi",
  alias: ["hello", "alive"],
  desc: "Say hello to bot.",
  react: "🧬",
  category: "Core",
  start: async (Miku, m, { pushName, prefix,args }) => {
    const Botversion = "1.3.5 Public";
    const pad = (s) => (s < 10 ? "0" : "") + s;
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const secs = Math.floor(seconds % 60);
      return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    };
    const uptime = formatTime(process.uptime());
    await Miku.sendMessage(
      m.from,
      {
        video: {
          url: "https://graph.org/file/d23aedb5855108d13b0e8.mp4", 
        }, gifPlayback : true,
        caption: `\n *${pushName}*, I am *Inovatech* bot. Powered and Coded by _𝐓𝐄𝐀𝐌 𝐍𝐎𝐕𝐀_. Type *${prefix}menu* to get my full command list.\n\n_🧩 Server Uptime:_ *${uptime}*\n✨_Status:_ *Operational*\n\n` ,
      },
      { quoted: m }
    );
  },
    

  
};
