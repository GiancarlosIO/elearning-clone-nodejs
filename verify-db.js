const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres_user',
  password: 'postgres_pass',
  port: 5433,
  database: 'elearning-clone-dev',
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
