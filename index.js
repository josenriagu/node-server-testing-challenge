require('dotenv').config();

const server = require('./server/server')
const port = process.env.PORT || 1000;

server.listen(port, () => {
   console.log(`Server locked and loaded on port ${port}!!`)
});