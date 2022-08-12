/*const { writeFileSync } = require('fs')
for (i = 1; i <= 100000; i++) {
    writeFileSync('./Part2/content/bigfile.txt', `${i}`, { flag: 'a' })
}
*/
const { createReadStream } = require('fs')

const stream = createReadStream('../Part2/content/bigfile.txt',
    {
        highWaterMark: 90000, encoding: 'utf8'
    })

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err)
})
