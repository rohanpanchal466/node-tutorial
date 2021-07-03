const {writeFileSync,readFileSync} = require('fs')
const { write } = require('fs/promises')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
const third = readFileSync('./content/sync-text.txt','utf8')

console.log(first,second,third)

writeFileSync('./content/sync-text.txt',`Here is the new file ${first},${second},${third}`)