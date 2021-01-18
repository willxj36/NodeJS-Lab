const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const request = require('request');

let extName;

rp('https://www.reddit.com/r/popular.json')
    .then(res => {
        JSON.parse(res).data.children.forEach(article => {
            extName = path.extname(article.data.url);
            if(extName === '.jpg' || extName === '.png' || extName === '.gif') {
                request.get(article.data.url).pipe(fs.createWriteStream(path.join(__dirname, `/downloads/${article.data.id}`)))
            }
        })
    })
    .catch(err => console.log(err))