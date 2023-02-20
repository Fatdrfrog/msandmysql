const sql = require("mysql");

const config = {
  host: "localhost",
  user: "samat",
  password: "1234",
  database: "sys",
};
const pool = sql.createPool(config);

module.exports = {
  pool,
};
