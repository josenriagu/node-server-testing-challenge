const express = require('express');
const helmet = require('helmet');

const server = express();
const familyRouter = require('../family/familyRouter')

server.use(express.json());
server.use(helmet());
server.use('/api/family', familyRouter);


server.get('/', (req, res) => {
   try {
      res.status(200).json('Trust the Process. Do not Panic!')
   } catch (error) {
      res.status(500).json('Auch!, let\'s rewire some connections together')
   }
});


module.exports = server;