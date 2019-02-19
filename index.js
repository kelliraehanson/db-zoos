const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: '/data/lambda.sqlite3'
  },
  useNullAsDefault: true, // you need this for sqlite3
}

const db = knex(knexConfig);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

// list all zoos
server.get('/api/zoos', (req, res) => {
// get all zoos from the database

});

// list zoos by id

// create new zoo

// update zoo

// remove a zoo 

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
