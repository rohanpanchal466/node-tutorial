const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }

const first = result

readFile('./content/second.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }

const second = result

writeFile('./content/async-text.txt',`Hello : ${first},${second}`,
(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
}
)
})
})