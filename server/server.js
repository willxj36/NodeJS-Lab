const path = require('path');
const fs = require('fs');

const chirpArray = [{
    "Username": "BobTheBuilder",
    "Chirp": "Can we build it? Yes, we can!"
}, {
    "Username": "TheIncredibleHulk",
    "Chirp": "Hulk SMASH!"
}, {
    "Username": "JustSomeDude420",
    "Chirp": "I'm just some dude being a dude, talking about dude things, ya know what I'm talking about, dudes?"
}, {
    "Username": "MyWifeTheAnnoyingWoman",
    "Chirp": "Look at me annoying the heck out of my husband whose just trying to do his school work. Aren't I so funny? Not according to anyone with a proper sense of humor, but I'm hysterical according to me!"
}, {
    "Username": "XxXxPersonxXxX",
    "Chirp": "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
}];

const chirpPath = path.join(__dirname, '../chirps.json')

fs.writeFileSync(chirpPath, JSON.stringify(chirpArray), err => {
    if(err) () => console.log(err)
});

const chirps = fs.readFileSync(chirpPath);
console.log(JSON.parse(chirps));