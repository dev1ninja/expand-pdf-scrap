const fs = require('fs');
const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const tough = require('tough-cookie');

const virtualConsole = new jsdom.VirtualConsole();

//axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
axios.defaults.jar = cookieJar

const pdfUrl = 'https://cma.org.sa/Market/imf/Pages/default.aspx';
/*
axios.get(pdfUrl)
.then(function (response) {
  const dom = new JSDOM(response.data, { pretendToBeVisual: true, resources: 'usable' });
  //fs.writeFileSync('body.txt', dom.window.document);
  //console.log("this is dom", dom.window.document.querySelector('a').textContent)
  dom.window.document.querySelectorAll('a').forEach(link => {
    console.log(link.href);
  });
  console.log("DOM: ", dom)
})
.catch(function (error) {
  console.log('error : ',error);
});
*/
async function loadListView(){
    const dom = await JSDOM.fromURL(pdfUrl, {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        includeNodeLocations: true,
        storageQuota: 10000000,
        runScripts: 'dangerously',
        resources: "usable",
        virtualConsole,
        cookieJar,
    });
    dom.window.document.querySelectorAll('a').forEach(link => {
    	console.log(link.href);
  	});
    return dom;
}
loadListView()