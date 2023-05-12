
  const fetch = require('node-fetch')
module.exports = {
  name: "getjid",
  alias: [""],
  desc: "Say hello to bot.",
  react: "🐱‍🏍",
  category: "Misc",
  start: async (Miku, m, { pushName, prefix,args,text }) => {
console.log(`Fetching information`)
    Miku.sendMessage(m.from,{text:`_Fetching Data From Servers_`},{quoted:m})
    await Miku.sendMessage(m.from,{text:`JID : ${m.from}`},{quoted:m})
    console.log(`Successed from ${m.from}`)
    
  }
}