const https = require('https');
const fs = require('fs');
const FileType = require('file-type');
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
var urlExists = require('url-exists')

const { weeklyData } = require("../content/weekly")

let count = 0
const getImagesAndUpdate = async () => {
    for (const item of weeklyData) {
        const id = item.id
        const data = JSON.parse(fs.readFileSync(`../public/weekly/data/${id}.json`, 'utf8'))

        if (!fs.existsSync(`./weekly/${id}`)){
            fs.mkdirSync(`./weekly/${id}`);
        }

        for (const weeklyItem of data.items) {
            if (weeklyItem.image.startsWith('https://wwebdev-images.s3.')) {
                urlExists(weeklyItem.image, function(err, exists) {
                    if (!exists) {
                        count++
                        // console.log()

                        // weeklyItem.image = weeklyItem.image.replace('wwebdev-images.s3.eu-central-1.amazonaws.com', 'wwebdev-images.s3.amazonaws.com')

                        // UPDATE JSON
                        // const jsonData = JSON.stringify(data)
                        // fs.writeFileSync(`../public/weekly/data/${id}.json`, jsonData);
                        console.log(exists, weeklyItem.image)
                    } else {
                        // console.log(exists, weeklyItem.image)
                    }
                });
            }
        }
    }
}

getImagesAndUpdate()
