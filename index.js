const puppeteer = require('puppeteer');
var email = 'email'
var senha = "password"


function login() { // use before use others // use antes dos outros abaixo
    (async () => {
        const browser = await puppeteer.launch({userDataDir: '/tmp/user-data-dir', headless: false, args: ['--no-sandbox'],});
        const page = await browser.newPage();
        await page.goto('https://pokeheroes.com/');
        await page.click('#topnav_wrapper > div:nth-child(2) > a')
        await page.waitForSelector('#blue_table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]')
        await page.type('#blue_table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]', email)
        await page.type('#blue_table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]', senha)
        await page.click('#blue_table > tbody > tr:nth-child(4) > td > input[type=submit]')
        await page.waitForTimeout('1000')
        await page.screenshot({ path: 'Login.png' });
        await browser.close();
      })();
}


function clicklist() { // not working // nao esta funcionando
    (async () => {
        const browser = await puppeteer.launch({userDataDir: '/tmp/user-data-dir', headless: false, args: ['--no-sandbox'],});
        const page = await browser.newPage();
        await page.goto('https://pokeheroes.com/clicklist')
        await page.click('#blue_table > tbody > tr:nth-child(7) > td:nth-child(2) > a')
        await page.waitForSelector('#pkmn_tab > div > div:nth-child(3) > div:nth-child(2) > a > input')

        await page.waitForTimeout('100000')
        await page.screenshot({ path: 'ClickList.png' });
        await browser.close();
      })();
}

function rumble(i) { //working
(async () => {
    const browser = await puppeteer.launch({userDataDir: '/tmp/user-data-dir', headless: false, args: ['--no-sandbox'],});
    const page = await browser.newPage();
  await page.goto('https://pokeheroes.com/');
  await page.click('#topnav_wrapper > div:nth-child(2) > a')
  await page.type('#blue_table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]', email)
  await page.type('#blue_table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]', senha)
  await page.click('#blue_table > tbody > tr:nth-child(4) > td > input[type=submit]')
  await page.goto('https://pokeheroes.com/rumble')
  await page.click('#textbar > a:nth-child(18) > div > div > span')
  await page.waitForSelector('#box_selector5')
  await page.click('#box_selector5')
  await page.waitForSelector('#pkmn_storage_small > div > div:nth-child('+ i +') > a')
  await page.click('#pkmn_storage_small > div > div:nth-child('+ i +') > a')
  await page.click('#rumbleForm > div:nth-child(9) > div:nth-child(4) > input[type=radio]')
  await page.select('#rumbleForm > div.rumble-duration > p > select', '720');
  await page.click('#rumbleForm > center > input[type=submit]')
  await page.waitForTimeout('5000')
  await page.screenshot({ path: i + '_Finish.png' });
  await browser.close();
  i = i + 1
  jose(i)
})();
}