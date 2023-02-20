const express = require("express");
const {
  getCustomers,
  createNewCustomer,
  getCreatedCustomer,
  updateCustomerByID,
  deleteCustomerByID,
} = require("./services/customers");

const {
  getNinjasByVillage,
  createNewNinja,
} = require("./services/chunin_exam");

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

// ninjas/:nID/:vID
app.get("/getallninjas", getNinjasByVillage, (req, res) => {
  const ninjas = req.ninjas;
  res.status(200).send(ninjas);
});

app.post("/ninja/new", createNewNinja, (req, res) => {
  const newNinjaId = req.newNinjaId;
  res.status(200).send(newNinjaId);
});

app.listen(3000);
