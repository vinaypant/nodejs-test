const os = require('os')
/*
since os is a built in module that is why we are not
using .(dot) for its path
*/

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);

