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

===================================================================================================
  

  const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors());
let details =  [{
    id:1,
    name:"Nagarajan",
    email:"raj123@email.com"
}]
app.get('/', function (req, res) {
  res.send(details)
})

app.get('/:id',(req,res)=>{
    let id = req.params.id;
    const data = details.filter(e => e.id==id);
    res.send(data);
})

app.post('/',async(req,res)=>{
    details.push(req.body)
    res.send({message:"OK"})
})

app.put('/',(req,res)=>{
    for(let i =0; i<details.length;i++)
    {
        if(req.body.id==details[i].id){
            details[i].name = req.body.name
            details[i].email = req.body.email
        }
    }
    res.send({message:"OK"})
})

app.delete('/:id',(req,res)=>{
    
    let index;
    for(let i = 0; i<details.length;i++)
    {
        if(req.params.id==details[i].id){
            index=i
        }
    }
    details.splice(index,1);
    res.send(details)
})

app.listen(PORT,()=>console.log("App is listening to port ",PORT))
