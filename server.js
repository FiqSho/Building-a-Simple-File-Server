const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/' || req.url == "/home") {
    fs.readFile('./public/home.html', (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("File not found");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  else if ( req.url == "/contact") {
    fs.readFile('./public/contact.html', (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("File not found");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  else if (req.url == "/about") {
    fs.readFile('./public/about.html', (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("File not found");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  else{
    res.writeHead(404, { "content-type": "text/html" });
        res.write("File not found");
        res.end();

  }
});

server.listen(3000);
console.log(`Server listening on port 3000`);
