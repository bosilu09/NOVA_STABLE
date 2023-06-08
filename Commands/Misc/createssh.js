const puppeteer = require('puppeteer');
const randomlinksandnames = ["https://www.jetssh.net/create-ssl-account-7-days/531/ssl-united-states-2 | US Server 1", "https://www.jetssh.net/create-ssl-account-7-days/531/ssl-united-states-2 | US Server 2", "https://www.jetssh.net/create-ssl-account-7-days/533/ssl-canada | Canada Server", "https://www.jetssh.net/create-ssl-account-7-days/535/ssl-singapore-1 | Singapore Server 1","https://www.jetssh.net/create-ssl-account-7-days/535/ssl-singapore-2 |Sinagpore Server 2"];
const randomIndex = Math.floor(Math.random() * randomlinksandnames.length);
const linkandname = randomlinksandnames[randomIndex];
var randomsplit = linkandname.split(" | ");
var link = randomsplit[0];
var name = randomsplit[1];


module.exports = {
    name: "newssh",
    alias: ["createssh"],
    desc: "Say hello to bot.",
    react: "🌐",
    category: "Core",
    start: async (Miku, m, { pushName, prefix,args,text }) => {

argstotext = args.join(" ");
var argstotext = argstotext.replace(/\s/g, '');
var splittedvar = argstotext.split("|");
var username = splittedvar[0];
var password = splittedvar[1];

if (username.length > 12 || username.length < 4){
  m.reply(`*Username Must Have 3-12 Characters !*`)
  return;
}
if (!username[0]||!password[0]){
  m.reply(`UserName or Password is Empty Try Again \n\nExample : _.newssh myusername | mypassword_`)
  return
} else

m.reply(`↪ Connecting to JetSSH `)
m.reply(`💠 Server Name : ${name}\n\n📄 Link : _${link}_\n\n🖥 Ports\n---------\n\nDropbear : 443,143,80\nSSL : 444\nBadVPN : 7300`)


async function initiate(link,username,password) {
  // Start a headless browser
  const browser = await puppeteer.launch();
  // Open the page in a new tab
  const page = await browser.newPage();
  await page.goto(`${link}`);

  // Find the "user" and "pass" input elements by their IDs and enter values
  const userInput = await page.$('#user');
  const passInput = await page.$('#pass');
  const usern = username;
  const passw = password;
  await userInput.type(usern);
  await passInput.type(passw);

  // Click the submit button
  const submitButton = await page.$('#submit');
  await submitButton.click();
m.reply(`⚖ Waitting for Response...`)
  // Wait for 15 seconds
  await page.waitForTimeout(15000);
  const reportText = await page.$eval('#report', el => el.innerHTML.replace(/<br>/g, "\n"));

  console.log(reportText);
m.reply(reportText);
  // Close the browser
  await browser.close();
}
initiate(link,username,password);

    }
}
