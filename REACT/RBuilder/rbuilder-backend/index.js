// 1. import json-server
const jsonServer = require("json-server");

// 5. IMPORT cors
const cors = require("cors");

// 2. create a server using json-server
const server = jsonServer.create();

// 3. setup a middleware
const middleware = jsonServer.defaults();

// 4. Setup Routes
const route = jsonServer.router("db.json");

// 6. Implementing Use
server.use(cors());
server.use(middleware);
server.use(route);

// 7. Create a PORT
const PORT = process.env.PORT || 3000;

// 8. Start Server
server.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});

