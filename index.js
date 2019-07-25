require('dotenv').config();

const server = require('./server');
const port = process.env.PORT || 1000;

server.get('/', (req, res) => {
   try {
      res.status(200).json('Trust the Process. Do not Panic!')
   } catch (error) {
      res.status(500).json('Auch!, let\'s rewire some connections together')
   }
});

server.listen(port, () => {
   console.log(`Server locked and loaded on port ${port}!!`)
});