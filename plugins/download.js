const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🐦‍🔥QUEEN SITHU SOND DOWNLOADER🐦‍🔥

🎵 *Song Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎧 *Enjoy the music brought to you by* *𝐐𝐔𝐄𝐄𝐍 𝐒𝐈𝐓𝐇𝐔 Bot*! 

> *Created with 💚 by 𝐌𝐑 𝐓𝐇𝐀𝐑𝐔𝐒𝐇𝐀* 
 
> *© 𝐐𝐔𝐄𝐄𝐍 𝐒𝐈𝐓𝐇𝐔-𝐌𝐃_𝐕1*   
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*©QUEEN SITHU - MD_V1*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍 𝚍𝚘𝚠𝚗𝚕𝚘𝚍')
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🐦‍🔥QUEEN SITHU VIDEO DOWNLOADER🐦‍🔥

🎥 *Video Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *𝐐𝐔𝐄𝐄𝐍 𝐒𝐈𝐓𝐇𝐔 Bot*! 

> *Created with 💚 by 𝐌𝐑 𝐓𝐇𝐀𝐑𝐔𝐒𝐇𝐀* 

> *© 𝐐𝐔𝐄𝐄𝐍 𝐒𝐈𝐓𝐇𝐔 - 𝐌𝐃_𝐕1* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© QUEEN SITHU - MD_V1*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍 𝚍𝚘𝚠𝚗𝚕𝚘𝚍')
}
})
