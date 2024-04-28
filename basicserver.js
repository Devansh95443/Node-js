const http =require('http');
http .createServer((req,resp)=>{
    resp.write("devansh");
    resp.end();

}).listen(4700);