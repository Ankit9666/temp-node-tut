const os =require('os');
//info about current user
const user =os.userInfo()
console.log(user);
console.log(`The System Uptime is ${os.uptime()} seconds`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalem:os.totalmem(),
    free:os.freemem(),
}
console.log(currentOS);