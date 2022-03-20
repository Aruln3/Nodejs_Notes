const fs = require( 'fs');

try{http.createServer ((req,res)=>{ res.writeHeader(200, ("Content-Type":"text/html"})

fs.readFile('index.html",(err,data)=>{ res.write(data)

res.end()

})

}).listen(PORT, ()=>{

console.log('Server is up in ', PORT)

}) 
}

catch(error)

{

console.log(error) 

}
