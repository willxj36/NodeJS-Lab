const rp = require('request-promise');
const fs = require('fs');
const path = require('path');

var articleArray = [];

rp('https://www.reddit.com/r/popular.json')
    .then(res => {
        JSON.parse(res).data.children.forEach(article => {
            articleArray.push({
                "Title": article.data.title,
                "URL": article.data.url,
                "Author": article.data.author_fullname
            })
            return articleArray;
        })
    }).then(() => fs.writeFileSync(path.join(__dirname, 'popular-articles.json'), JSON.stringify(articleArray), err => {
        if(err) () => console.log(err)})
    ).catch(err => console.log(err))