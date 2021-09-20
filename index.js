const fs = require('fs');
const axios = require('axios');

const pdfUrl = 'https://cma.org.sa/Market/imf/Pages/default.aspx';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

axios.get(pdfUrl)
.then(function (response) {
  const dom = new JSDOM(response.data, { runScripts: "dangerously", resources: "usable", pretendToBeVisual: true });
  console.log(dom.window.document.querySelector('title').textContent);
  let a = [...dom.window.document.querySelectorAll('a')];
  let osList = [...dom.window.document.getElementsByClassName('os')];
  let archList = [...dom.window.document.querySelectorAll('.arch')];
  let downloadLinks = [...dom.window.document.querySelectorAll('.main-download__variant__sub-table__download')];
  console.log(a);
  console.log(osList);
  console.log(archList);
  console.log(downloadLinks);
})
.catch(function (error) {
  console.log(error);
});