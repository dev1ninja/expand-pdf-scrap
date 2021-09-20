const fs = require('fs');
const axios = require('axios');

const pdfUrl = 'https://cma.org.sa/Market/imf/Pages/default.aspx';

axios.get(pdfUrl)
    .then(({ data }) => fs.writeFileSync('body.txt', data));