const puppeteer = require('puppeteer')
const $ = require('cheerio')
const fs = require('fs')

(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('https://cma.org.sa/Market/imf/Pages/default.aspx', { waitUntil: 'networkidle0' })

	const content = await page.evaluate(() => document.body.innerHTML)
	const data = $('div[class="title_wrapper"]', content).find('h1').text()

	//console.log(content.text())
	fs.writeFileSync('nex.txt', content.text())

	await browser.close()
})()