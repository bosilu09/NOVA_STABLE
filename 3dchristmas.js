const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  name: "website",
  alias: ["web"],
  desc: "To get details about a website",
  category: "Utilities",
  usage: `website <website link>`,
  react: "🌐",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0]) {
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a website link to get details about!` },
        { quoted: m }
      );
    }

    let websiteUrl = args[0];
    if (!websiteUrl.startsWith('http') && !websiteUrl.startsWith('www')) {
      websiteUrl = `https://www.${websiteUrl}`;
    } else if (!websiteUrl.startsWith('http') && websiteUrl.startsWith('www')) {
      websiteUrl = `https://${websiteUrl}`;
    }

    const response = await axios.get(websiteUrl);

    const $ = cheerio.load(response.data);

    const websiteTitle = $("head title").text();
    const websiteDescription = $('meta[name="description"]').attr("content");
    const websiteKeywords = $('meta[name="keywords"]').attr("content");

    Miku.sendMessage(
      m.from,
      {
        text: `▰▰▰▰▰ 𝙒𝙀𝘽𝙎𝙄𝙏𝙀 𝙄𝙉𝙁𝙊 ▰▰▰▰▰\n\n*Title* :- ${websiteTitle},\n\n*Description* :- ${websiteDescription},\n\n*Keywords* :- ${websiteKeywords}`,
        footer: "Inovatech Bot"
      },
      { quoted: m }
    );
  },
};
