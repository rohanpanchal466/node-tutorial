const os = require('os')
// const user = os.userInfo()
// console.log(user,os.uptime());

const module_info = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(module_info)