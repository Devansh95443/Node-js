const http=require('http');
function datacontrol(req,resp){
    resp.write("my name is devansh srivastava");
    resp.end();
}
http.createServer(datacontrol).listen(5000);