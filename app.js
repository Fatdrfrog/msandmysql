const express = require("express");
const {
  getCustomers,
  createNewCustomer,
  getCreatedCustomer,
  updateCustomerByID,
  deleteCustomerByID,
} = require("./services/customers");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("successfull connection");
});

app.get("/customers", getCustomers, (req, res) => {
  const customers = req.customers;
  res.status(200).send({ status: 200, customers });
});

app.post(
  "/customers/new",
  createNewCustomer,
  getCreatedCustomer,
  (req, res) => {
    const customerID = req.customerID;
    res.status(200).send({ message: "customer was added", customerID });
  }
);

app.put(
  "/customers/:id",
  updateCustomerByID,
  getCreatedCustomer,
  (req, res) => {
    const customerID = req.customerID;
    res.status(200).send({ message: "customer was updated", customerID });
  }
);

app.delete("/customers/:id", deleteCustomerByID, (req, res) => {
  res.status(200).send({ message: "customer was deleted" });
});

app.listen(3000);
