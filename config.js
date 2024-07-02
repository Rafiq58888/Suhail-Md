const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_09_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhGY3BmbmdHN0xtM1YrbGswOEQ5UXJCR0tZSmRpTkt6bi9EcDF1R3VrM289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlI5ajVfd1gtUUFXZnJTQk0zQzNYMWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDM0N2RmMDktNTJlMS00OGMwLWE5ZjgtNjk2ODFlZTI0NDFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgMTEwLFxuICAgICAgMjUsXG4gICAgICAyNTIsXG4gICAgICAxNjAsXG4gICAgICAyMDcsXG4gICAgICA1LFxuICAgICAgMTAzLFxuICAgICAgNjEsXG4gICAgICAxNDcsXG4gICAgICAyMTAsXG4gICAgICAxMzcsXG4gICAgICA3MSxcbiAgICAgIDQ2LFxuICAgICAgMTAyLFxuICAgICAgMjQ3LFxuICAgICAgNzgsXG4gICAgICAyMTUsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTIwLFxuICAgICAgNzYsXG4gICAgICAyMTMsXG4gICAgICAyNDEsXG4gICAgICAyMTYsXG4gICAgICAyMDcsXG4gICAgICAxMDQsXG4gICAgICAxNTEsXG4gICAgICAxNjcsXG4gICAgICAyNTAsXG4gICAgICA0NCxcbiAgICAgIDExNCxcbiAgICAgIDQsXG4gICAgICAyMDYsXG4gICAgICAxNjAsXG4gICAgICA3MyxcbiAgICAgIDE1NyxcbiAgICAgIDE3MyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU0ZBQlFBWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA1NDUyNjU4OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1Njc1Mzk5OTg0NzUzNDo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWEtpdk1CRUpEUGpyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdic2JHdWJLeE9FZE5HZjJ4RGNiNGh6Tkhlemk3MU9Vek9UbUVHNFFNRG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREczUitqS3F1cjlXemUvaWo3S1lodnJNYTVrdksrT21OaUxQSnJpZ3g1MXdhNjRLWXpERGxWMVdHVmFYY0hzQ3JMQm5EYnR0UVN6SUk5MVE0ZGxTQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHU1Y1pNOVp0ck92enBhdzMzdUJ2blBDcklFZkdvN3hoeXZnWEFpTlhNa0hvQjFJYjl1Z0k1WmRWOFp3ajhGVERTa1J5V2F4U1VrZ0psZll3RTRLaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA1NDUyNjU4OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkwNDE0OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
