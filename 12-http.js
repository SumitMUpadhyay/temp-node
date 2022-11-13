const http = require('http')

const server = http.createServer((req,res)=>{
 if(req.url === '/'){
  res.write('Welcome to our home page')
 }
 // console.log(req)
if(req.url === '/about'){
res.end('Here is our short history');
return;
}
res.end(`<h1>Oops!</h1><p>We can't seem to find a page you are looking for <a href ="/">back home</a>`)
})

server.listen(5000)