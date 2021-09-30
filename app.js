const axios = require('axios');
const cheerio = require('cheerio');


async function run() {
    const data = await axios.get('https://itviec.com/viec-lam-it/mobile-apps-developer-ios-android-south-telecom-2605');

    const $ = cheerio.load(data.data);

    let i = 2;
    do {

        const selecutorTieude = `#container > div.jd-page > div.jd-page__job-details > div > h2:nth-child(${i})`; // copy selecutor  i là số thứ tự tăng dần
        const tieuDe = $(selecutorTieude).text();
         console.log(tieuDe);
        const solist=9; // số lượng list trong từng mục lấy max
        for (let j = 0; j < solist; j++) {

            const selecutorMota = ` #container > div.jd-page > div.jd-page__job-details > div > div:nth-child(${i + 1}) > ul > li:nth-child(${j})`;

            const Mota = $(selecutorMota).text();

            console.log(Mota);
        }
        i++;
    } while (i < 14);
}

run()