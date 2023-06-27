const http = require("http");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // This you do not need for simple web requests:
    let fieldname;
    let data = {};
    req.rawHeaders.forEach((item, c) => {
      if (!(c % 2)) {
        fieldname = item;
      } else {
        if (fieldname == "Host") req.hostname = item;
        if (fieldname == "Accept-Language") req.acceptLanguage = item;
        if (fieldname == "User-Agent") req.userAgent = item;
      }
    });

    console.log(`Request received: ${req.method} to ${req.hostname}${req.url}`);

    if (req.method !== "GET" || req.url !== "/test") {
      res.write("Not found");
      res.end();
      console.log(req.method, "Not found:", req.hostname + req.url);
    }

    fs.readFile(path.join(__dirname, "lesson.ejs"), function (err, content) {
      // put all the data in an object 'data':
      let data = {
        course: "1234",
        level: "newbie",
        lesson: "1234",
        title: "Intro to All the Way to Intermediate series",
        lessonDetails:
          'Welcome to our new course code named "All the Way to Intermediate" or #ATWTI for short. In this new series, we hope to teach a complete beginner everything they need to know to get to an intermediate level. Each video will be a short and focused lesson on daily phrases, common grammar, or cultural insights. The series is designed to be watched from beginning to end, and after each lesson, we will recommend some lessons from our library that supplements the topic and boost your learning even further See you in the next video.',
        video: {
          source: "AWS",
          poster:
            "https://s3contents.chinesepod.com/4627/382bda1d90b77322a0caad3edb8de2085d23c6ae/images/1c4e3344a844bd7ace207db188dc4f16d013c770.png",
          link: "https://d2arcxjkuir81y.cloudfront.net/assets/BV0002.TourForHomePage/HLS/BV0002.TourForHomePage.m3u8",
        },
        supplementaryTabs: {
          dialogue: [
            {
              traditional: "你好。",
              pinyin: "nǐhǎo。",
              english: "Hello!",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
            {
              traditional: "1你好。",
              pinyin: "1nǐhǎo。",
              english: "1Hello!",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
            {
              traditional: "2好。",
              pinyin: "1nǐhǎo。",
              english: "1Hello!",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
          ],
          vocabulary: [
            {
              traditional: "老年痴呆症",
              pinyin: "lǎoniánchīdāizhèng",
              english: "senile dementia",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
            {
              traditional: "鏡頭",
              pinyin: "jìngtóu",
              english: "camera lens; camera shot (in a movie etc); scene",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
            {
              traditional: "老年痴",
              pinyin: "jìngtóu",
              english: "camera lens; camera shot (in a movie etc); scene",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
          ],
          expansion: [
            {
              word: "历历在目",
              traditional: "離 鄉 多 年 了 但 家鄉 的 風景 依然 歷歷在目",
              pinyin:
                "lí xiāng duō nián le , dàn jiāxiāng de fēngjǐng yīrán lìlìzàimù 。",
              english:
                "Although he has been away from home for many years, the scenery of his hometown is still vivid in his mind.",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
            {
              word: "历历在目",
              traditional: "離 鄉 多 年 了 但 家鄉 的 風景 依然 歷歷在目",
              pinyin:
                "lí xiāng duō nián le , dàn jiāxiāng de fēngjǐng yīrán lìlìzàimù 。",
              english:
                "Although he has been away from home for many years, the scenery of his hometown is still vivid in his mind.",
              audio:
                "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
            },
          ],
          downloads: {
            thumbnail:
              "https://s3.amazonaws.com/assets.chinesepod/images/logo.chinesepod.svg",
            video:
              "https://s3.amazonaws.com/assets.chinesepod/images/logo.chinesepod.svg",
            audio:
              "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
          },
          exercises: [
            {
              type: 1,
              traditional: "那個鬼故事聽得人",
              pinyin: "nàge guǐgùshi tīng de rén _____.",
              answers: [
                { traditional: "刷劇", pinyin: "shuājù" },
                { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" },
                { traditional: "歷歷在目", pinyin: "lìlìzàimù" },
                { traditional: "妖魔鬼怪", pinyin: "yāomóguǐguài" }
              ],
              correct: { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" }
            },
            {
              type: 1,
              traditional: "這段往事直到現在還使我",
              pinyin: "duàn wǎngshì zhídào xiànzài hái shǐ wǒ _____ ne!",
              answers: [
                { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" },
                { traditional: "刷劇", pinyin: "shuājù" },
                { traditional: "歷歷在目", pinyin: "lìlìzàimù" },
                { traditional: "妖魔鬼怪", pinyin: "yāomóguǐguài" }
              ],
              correct: { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" }
            },
            {
              type: 2,
              chinese: [
                { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán", tag: "2" },
                { traditional: "刷劇", pinyin: "shuājù", tag: "1" },
                { traditional: "妖魔鬼怪", pinyin: "yāomóguǐguài", tag: "4" },
                { traditional: "歷歷在目", pinyin: "lìlìzàimù", tag: "5" },
                { traditional: "歷歷在目", pinyin: "yāomóguǐguài", tag: "3" } 
              ],
              english: [
                { text: "binge watching", tag: "4" },
                { text: "to indulge; to pamper; to connive at", tag: "1" },
                { text: "to toss and turn restlessly (in the bed)", tag: "2" },
                { text: "vivid in one's mind (idiom)", tag: "3" },
                { text: "unconscious mind; subconscious mind; subconsciousness", tag: "5" }
              ]
            },
            {
              type: 3,
              answers: [
                { traditional: "當你看著屏幕中一個個腥羴色，暴力的鏡頭，這些啊，其實都會進入你的潛意識。", pinyin: "dāng nǐ kàn zhe píngmù zhōng yīgègè xīng shān sè,bàolì de jìngtóu,zhèxiē a,qíshí dōu huì jìnrù nǐ de qiányìshí." },
                { traditional: "刷劇這種行為其實不只是放鬆，有的時候也可能變成一種放縱哦", pinyin: "shuājù zhèzhǒng xíngwéi qíshí bù zhǐshì fàngsōng,yǒu de shíhou yě kěnéng biànchéng yīzhǒng fàngzòng o." },
                { traditional: "當你看著屏幕中一個個腥羴色，暴力的鏡頭，這些啊，其實都會進入你的潛意識。", pinyin: "dāng nǐ kàn zhe píngmù zhōng yīgègè xīng shān sè,bàolì de jìngtóu,zhèxiē a,qíshí dōu huì jìnrù nǐ de qiányìshí." },
                { traditional: "刷劇這種行為其實不只是放鬆，有的時候也可能變成一種放縱哦", pinyin: "shuājù zhèzhǒng xíngwéi qíshí bù zhǐshì fàngsōng,yǒu de shíhou yě kěnéng biànchéng yīzhǒng fàngzòng o." },
              ],
              correct: { traditional: "刷劇這種行為其實不只是放鬆，有的時候也可能變成一種放縱哦", pinyin: "shuājù zhèzhǒng xíngwéi qíshí bù zhǐshì fàngsōng,yǒu de shíhou yě kěnéng biànchéng yīzhǒng fàngzòng o." }
            },
            {
              type: 4,
              traditional: "這段往事直到現在還使我",
              pinyin: "duàn wǎngshì zhídào xiànzài hái shǐ wǒ _____ ne!",
              answers: [
                { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" },
                { traditional: "刷劇", pinyin: "shuājù" },
                { traditional: "妖魔鬼怪", pinyin: "yāomóguǐguài" },
                { traditional: "歷歷在目", pinyin: "lìlìzàimù" },
              ],
              correct: { traditional: "毛骨悚然", pinyin: "máogǔsǒngrán" }
            },
          ],
          comments: [
            {
              img: "https://www.chinesepod.com/home/img/symbol-black-center.d7c26c3a.svg",
              name: "nikol-the-faerie",
              data: "March 27",
              time: "02:11 PM",
              message: "I love this series the best!",
            },
            {
              img: "https://www.chinesepod.com/home/img/symbol-black-center.d7c26c3a.svg",
              name: "vira",
              data: "March 23",
              time: "05:15 AM",
              message: "I love this series the best!",
            },
          ],
        },
      };

      if (err) {
        content =
          "<h1><%= title %></h3><p>This is lesson no. <%= lesson %></p>";
      }

      res.write(ejs.render(String(content), data));
      res.end();
    });
  })
  .listen(9000);

console.log("Listening ...");
