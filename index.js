const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();

const pdfUrl = 'https://cma.org.sa/Market/imf/Pages/default.aspx';

async function loadListView(){
    const dom = await JSDOM.fromURL(pdfUrl, {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        includeNodeLocations: true,
        pretendToBeVisual: true,
        runScripts: 'dangerously',
        resources: "usable",
        virtualConsole,
    });
    dom.window.document.querySelectorAll('a').forEach(link => {
      	console.log(link.href);
  	});
    return dom;
}
loadListView()