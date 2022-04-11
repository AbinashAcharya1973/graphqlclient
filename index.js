const fs = require('fs');
const http1=require('http');
http1.createServer((req,response)=>{
        console.log(req.url);
        if(req.url==='/'){
            fs.readFile('client.vue','utf8',(err,data)=>{
                if(err) throw err;
                response.write(data);
                response.end();
            });
        }
        if(req.url==='/purchase'){
            response.write('<h1>Purchase is building....');
            response.end();
        }
        if(req.url==='/invoice'){
            response.write('<h1>Invoice is building....');
            response.end();
        }
        
}
).listen(5000,()=>console.log('Server runnning... @5000'));

