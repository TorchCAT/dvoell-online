const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private_key.pem'),
  cert: fs.readFileSync('certificate_full_chain.pem')
};
let count = 0;
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end(fs.readFileSync('index.html') + count++);
}).listen(443);
