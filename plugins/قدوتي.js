
let handler  = async (m, { conn }) => {
  let user = m.sender;
conn.reply(m.chat,`▣──────────────────
│
*▣─❧ الطلب قدوتي*“
(@${user.split('@')[0]})
${pickRandom(global.Example)}
│
▣──────────────────`, m)
}
handler.help = ['Example']
handler.tags = ['fun']
handler.command = /^قدوتي/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.Example = [
'🎇 قدوتك🎇 ❈هو↲  بدر خلف🧐',  

 '🎇 قدوتك🎇 ❈هو↲ ليونيل ميسي🇦🇷', 

 '🎇 قدوتك🎇 ❈هو↲  كريستيانو رونالدو🇵🇹',

 '🎇 قدوتك🎇 ❈هو↲  عادل امام 🐦',  

 '🎇 قدوتك🎇 ❈هو↲  نيمار جونيور🇧🇷',

     '🎇 قدوتك🎇 ❈هو↲  مونكي دي لوفي🇯🇵',

 '🎇 قدوتك🎇 ❈هو↲  ايتاتشي🐦‍⬛',

      '🎇 قدوتك🎇 ❈هو↲ اوزوماكي ناروتو🇯🇵',

   '🎇 قدوتك🎇 ❈هو↲  عبد الله الزميلي😱',

       '🎇 قدوتك🎇 ❈هو↲  ايتشيرو اودا🇯🇵',

   '🎇 قدوتك🎇 ❈هو↲  كريم بنزيما 🇫🇷',

   '🎇 قدوتك🎇 ❈هو↲  ما عندك يا فاشل 👎',
'🎇 قدوتك🎇 ❈هو↲  جراح الهبيده 👴🏻',
       '🎇 قدوتك🎇 ❈هو↲  تالا صفوان🙉',
'🎇 قدوتك🎇 ❈هو↲ لويس سواريز🇺🇾',
     '🎇 قدوتك🎇 ❈هو↲  ايفانوكوف😳',
 '🎇 قدوتك🎇 ❈هو↲  هاري ماغواير🇽🇪',
 '🎇 قدوتك🎇 ❈هو↲  ايزن سوسكي🇯🇵',
       '🎇 قدوتك🎇 ❈هو↲ كيليان مبابي🇫🇷',
    '🎇 قدوتك🎇 ❈هو↲ عثمان الخميس❤️',
'🎇 قدوتك🎇 ❈هو↲  جون سنو⚔️',
       '🎇 قدوتك🎇 ❈هو↲ زورو 🇯🇵',
     '🎇 قدوتك🎇 ❈هو↲  حوريه برلين🤨',
   '🎇 قدوتك🎇 ❈هو↲ رسول الله صلى الله عليه وسلم🤍',
   '🎇 قدوتك🎇 ❈هو↲  محمد صلاح 🇪🇬',
 ] 
