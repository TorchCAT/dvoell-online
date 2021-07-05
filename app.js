const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private_key.pem'),
  cert: fs.readFileSync('certificate_full_chain.pem')
};
let count = 0;
let last = +new Date();
https.createServer(options, function (req, res) {
  const now = +new Date();
  if (now - last > 1000) {
  last=now
  res.writeHead(200);
  res.end(fs.readFileSync('index.html') + count++);}
  else{
    last=now
    res.writeHead(403);
    res.end("STOP!")
  }
}).listen(443);
