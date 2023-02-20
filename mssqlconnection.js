const sql = require("mssql");

const config = {
  user: "samat",
  password: "123",
  server: "DESKTOP-C8631O9\\MSSQLSERVER01", // You can use 'localhost\\instance' to connect to named instance
  database: "shop",
  options: {
    trustServerCertificate: true,
  },
};

(async function () {
  try {
    let pool = await sql.connect(config);

    let result1 = await pool.request().query("SELECT * FROM customers");

    console.dir(result1);
  } catch (err) {
    console.log(err);
    // ... error checks
  }
})();

sql.on("error", (err) => {
  console.log(err);
  // ... error handler
});
