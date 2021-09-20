const fs = require('fs');
const jsdom = require('jsdom');
const got = require('got');
const { JSDOM } = jsdom;
const fetch = require('node-fetch');


const pdfUrl = 'https://cma.org.sa/Market/imf/Pages/default.aspx';

(async () => {
  let htmlDoc = await fetch(pdfUrl)
    .then((res) => res.text())
    .then((body) => body); 
  try {
    const document = new jsdom.JSDOM().window.document;
    fs.writeFileSync('body.txt', htmlDoc);

  } catch (e) {
    console.log('error', e);
  }
 })(); 