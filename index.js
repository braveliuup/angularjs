var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var ip = 'localhost';
var port = 555;

 var processRequest= function(request, response){
     var hasExt = true;
     var requesturl = request.url;
     var pathName = url.parse(requesturl).pathName;
     pathName = decodeURI(pathName);

     if(path.extname(pathName) === ''){
         if(pathName.charAt(pathName.length-1) != '/'){
             pathName += '/';
             var redirect = "http://"+request.headers.host +pathName;
             response.writeHead(301, {
                 location: redirect
             }) ;
             response.end();
         }
         pathName += 'index.html';
         hasExt = false;
     }
     var filePath = path.join('http/webroot', pathName);
     var contentType = this.getContentType(filePath);

     fs.exists(filePath, function(exists){
         if(exists){
             response.writeHead(200, {'content-type': contentType});
            var stream = fs.createReadStream(filePath, {flags: 'r', encoding: null});
            stream.on('error', function(){
                response.writeHead(500, {'content-type': 'text/html'});
                response.end('<h1>500 server error</h1>');
            })
            stream.pipe(response);
         }else{
             if(hasExt){
                 response.writeHead(404, {'content-type': 'text/html'});
                 response.end('<h1>404 not found</h1>')
             }else{
                 var html = "<head><meta charset='utf-8'></head>";
                 try  {
                     var fileDir = filePath.substring(0, filePath.lastIndexOf('\\'));
                     var files = fs.readdirSync(filedir);
                     for(var i in files){
                         var filename = files[i];
                         html += '<div><a href="'+filename+'">'+filename+'</a></div>';
                     }
                 }catch(e){
                     html += '<h1>访问的目录不存在</h1>'
                 }
                 response.writeHead(200, {'content-type': 'text/html'});
                 response.end(html);
             }
         }
     })


 } 
var httpServer = http.createServer(processRequest.bind(this));

httpServer.listen(port, function(){
    console.log('[HttpServer] [Start]', 'running at http://'+ip+":"+port+'/');
})
