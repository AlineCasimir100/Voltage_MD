//Voltage_MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "KERM-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhLTGpUbCtNMGNWb0txd2FaekhKYW9PSFB6QkpqcmYvSEpRTmRXeXRHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFV4YU9yVkkyRXU0dklnZktyMWswdUxudURySkZxQ21IcHBubHhQL2gzZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRW9HaUZKOFJpazhDdlRMbW9wc0RRV0JwVHFzcHJSdS9jeTUrVElCNWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQTFiOGRoUXlDOVBjK01kWUp3dUlCeVBSOTI1Um5EZXRyQmZUdXAvZ2s4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFT3lEV1p4REtRdVE4RjgwUTJ6VFJKYlg2a290UWJBZ1ZMS3hQS1VyMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1pVisycGZ6UGhYVEg2WHJBZFc1OGd3R3JQNm5YYTlENUluSTZXMGo1UUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURzZEQ0TmY3cmpab09qVFlIMlFRMmh3b2M0eHZyM3JqNUJrQ0E0bU9rRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndOWklXa2JjbC90QUJyQ3RML0J2MW5XeVF4TTNJWWNXT2JrYWlJUUVqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJVDNQd2t0empHQmFiODdnd2xlWVc1RG5SZ3l6OWFlYUFRbmxPY0pKNWQxcFBpb1dMTE5BV3Z4cThyNnpMaDIrazRIbDk5WHBBb2N1b2d3dngwRWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiWnN4akJ6UnZ3TzVvMU9iWVp6cWpxTitGMWtDZjk4TURTeVlRSXJ5YUJDND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI1MDkzNzIyMDgwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQTAxOUMyN0I2MjQzQzhCOERGRTJCRTgxOTY5OUM4NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MTE4NjgyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1ZUFLSkU0Z1FzYXlBTUhyQWtvOUZRIiwicGhvbmVJZCI6ImRkNTdkNmIxLWY2YmUtNDAzNi05NGVlLWM0YmY1YmJjYzdhNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUGNFeUlSS00rbDFOK2kxQWJaUFNvLzNCMzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVhlc2lZYlpQRERwTW11Y1pnWFBjQ0dMQmprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdCR1Y2MjQyIiwibWUiOnsiaWQiOiI1MDkzNzIyMDgwMToxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbU9wS3NHRUlpYThyb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4bm5yenA3N0VJMUN5M0Z6NVIzWHE2cXFCQXVRMzBwWENNc0VEUnZ6V1QwPSIsImFjY291bnRTaWduYXR1cmUiOiJCcVhMa0xUNFNMTVVBS1M4SFZCNDhJL3A1TzJiM2lXOFNRS0VFRE1MVHVjR3pQblhWdzMrK3lUaFpwaXFTVERuQ1Z1MjA1OXBYZTVwMjBIaFZUVitBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVNGZTBBNVIrMFVvOXZQNUxIMms5cDlzcEZidi9wNWw3Z2lxTmdwbjFqbElPdlladFc3SWduc3hGQmREUXdVUElvUlNkTENkR1grR3pSVFhWc0dJaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNzIyMDgwMToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNaNTY4NmUreENOUXN0eGMrVWQxNnVxcWdRTGtOOUtWd2pMQkEwYjgxazkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxMTg2NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUE9qIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "2349155298855";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "50937220801")
  : "2349155298855";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/57c97c7542a9e9d2f8c52.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/57c97c7542a9e9d2f8c52.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "BRAND PRODUCT Voltage Lord",
  author: process.env.PACK_AUTHER || "Voltage Lord",
  packname: process.env.PACK_NAME || "Voltage Lord",
  botname: process.env.BOT_NAME || "Voltage_MD",
  ownername: process.env.OWNER_NAME || "Voltage⚡Lord",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "odunayoayinla23@gmail.com";
global.location = "Lagos";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/VoltageLord/Voltage_MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "50937220801 50937220801"
  ";
global.msg_style = process.env.STYLE || """;
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://gnime-v2.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
