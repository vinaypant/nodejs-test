const fsModule = require('fs')

const rf1 = (filePath) => {
    return new Promise((resolve, reject) => {
        fsModule.readFile(filePath, 'utf-8', (error, data) => {
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

async function rf3(){
   return 'hello'
}
const start = async () => {
    try {
        const third= rf3() //return Promise but using await we can directly get the result
        const first = await rf1('./content/first.txt')
        console.log(`Result from File 1: ${first}`);
        const second = await rf2()
        console.log(`Result from File 2: ${second}`);
    }
    catch (error) {
        console.log(`error: ${error}`)
    }
}
start();