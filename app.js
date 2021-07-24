const http = require('http');
const url = require('url');

let count = 0;
let last = +new Date();
console.log('app is running');

http.createServer(function (req, res) {
  const now = +new Date();
  if (now - last > 1000) {
  last=now
  console.log('serving index.html from app');
  res.writeHead(200);
  res.end(fs.readFileSync('index.html') + count++);}
  else{
    last=now
    console.log('returning access denied due to request rate limit');
    res.writeHead(403);
    res.end("STOP!")
  }
}).listen(8080);

