const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({apiKey: process.env.OPENAI_KEY ||"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",});


module.exports = {
    name: "chatgpt",
    alias: ["ytplay", "ytv"],
    desc: "To play a song from youtube",
    category: "Media",
    usage: `play <song name>`,
    react: "🖥",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0]){
        m.reply("⚖ _Your Prompt is Empty Please Add one Before Trying Again_\n\nexample: .chatgpt hi how are you")
      return;}
const openai = new OpenAIApi(configuration);
m.reply(`Using api ${process.env.OPENAI_KEY}`)
async function chatthr(prompt){
console.log(`User : ${args.join(" ")}`)
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: `${prompt}`}],
});
console.log(`ChatGPT : ${completion.data.choices[0].message.content}`);

m.reply(`👤 *User* : _${args.join(" ")}_\n\n🖥 *ChatGPT* : _${completion.data.choices[0].message.content}_`)
}
chatthr(args.join(" "))
    }
}
