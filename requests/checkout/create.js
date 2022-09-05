const http = require("http");

const options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "3001",
  "path": "/api/checkout",
  "headers": {}
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({name: 'kley'}));
req.end();