const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`Db2 project server listening on localhost:${port}`)
);
