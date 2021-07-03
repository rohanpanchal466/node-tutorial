const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/')
   {
        res.end("Hello /")
   }
   if(req.url === '/about')
   {
       res.end("Hello about")
   }
})
console.log("server is running at port 5000")
server.listen(5000)