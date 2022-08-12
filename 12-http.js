const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to about page')
    }
    // res.write('Welcome to our home page');
    // res.end()
    //console.log('hello');
   // res.end('<h1>Oops!</h1>');  throwing error

})

server.listen(5000)
