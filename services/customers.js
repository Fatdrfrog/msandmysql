const { pool } = require("../db");

function getCustomers(req, res, next) {
  pool.query("SELECT * FROM customers2", (err, result) => {
    if (err) throw err;

    console.log("customers");
    console.log(result);

    req.customers = result;

    next();
  });
}

function createNewCustomer(req, res, next) {
  const { name, surname, city } = req.body.customer;
  pool.query(
    `INSERT INTO customers2(name,surname,city) VALUES('${name}','${surname}','${city}')`,
    (err, result) => {
      if (err) throw err;

      next();
    }
  );
}

function getCreatedCustomer(req, res, next) {
  pool.query(
    `SELECT customer_id FROM customers2 ORDER BY customer_id DESC LIMIT 1`,
    (err, result) => {
      if (err) throw err;

      req.customerID = result;
      next();
    }
  );
}

function updateCustomerByID(req, res, next) {
  const id = req.params.id;
  const { field, value } = req.query;

  pool.query(
    `UPDATE customers2 SET ${field}='${value}' WHERE customer_id=${id}`,
    (err, result) => {
      if (err) throw err;

      next();
    }
  );
}

function deleteCustomerByID(req, res, next) {
  pool.query(
    `DELETE FROM customers2 WHERE customer_id=${req.params.id}`,
    (err, result) => {
      if (err) throw err;

      next();
    }
  );
}

module.exports = {
  getCustomers,
  createNewCustomer,
  getCreatedCustomer,
  updateCustomerByID,
  deleteCustomerByID,
};
