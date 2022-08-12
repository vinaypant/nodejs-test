const fs = require('fs')

function rf(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(data);
            }

        })
    })

}

const rf2 = () => {
    return new Promise((resolve, reject) => {
        resolve('data from rf2')
    })
}

rf('./content/first.txt').then((result => {
    console.log(`result : ${result}`)
    rf2().then(result2 => {
        console.log(`result2 : ${result2}`)
    }).catch(err => console.log('error from rf2'))

})).catch((error) => {
    console.log(`error : ${error}`)
}).finally(() => {
    console.log('final  exec')
})