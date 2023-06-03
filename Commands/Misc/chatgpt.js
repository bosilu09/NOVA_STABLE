const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({apiKey: "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",});


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
m.reply(`🧩 Prompt : ${args.join(" ")}`);
const openai = new OpenAIApi(configuration);

async function chatthr(prompt){
console.log(`User : ${args.join(" ")}`)
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: `${prompt}`}],
});
console.log(`ChatGPT : ${completion.data.choices[0].message.content}`);

m.reply(`👤 *User* : _${args.join(" ")}_\n\n🖥 *ChatGPT* : _${completion.data.choices[0].message.content}_`)
}
 m.reply("🔮 _Generating Response_")
chatthr(args.join(" "))
    }
}
