const fs=require('fs');
const a=fs.readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
    console.log(err)
    rerturn 
    }
    const first =result
    fs.readFile('./content/second.txt','utf8')
})
