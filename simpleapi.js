const http=require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'})
    resp.write (JSON.stringify({name:'devansh',email:'devanshsrivastava0205@gmail.com'}))
    resp.end();
}).listen(5000)