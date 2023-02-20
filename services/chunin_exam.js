const { pool } = require("../db");

function getNinjasByVillage(req, res, next) {
  const villageId = req.body.vID || 4;
  pool.query(`CALL getAllNinjasByVillage(${villageId})`, (err, result) => {
    if (err) throw err;
    req.ninjas = result;
    next();
  });
}
// createNewNinja(
//   IN ninja_name_param VARCHAR(50),
//   IN village_id_param INT,
//   IN chakra_id_param INT,
//   IN skill_name_param VARCHAR(50),
//   IN creation_date_param DATETIME,
//   OUT ninja_id_out INT)

function createNewNinja(req, res, next) {
  const {
    ninja_name_param,
    village_id_param,
    chakra_id_param,
    skill_name_param,
    creation_date_param,
  } = req.body.new_ninja;

  pool.query(
    `CALL createNewNinja('${ninja_name_param}',${village_id_param},${chakra_id_param},'${skill_name_param}','${creation_date_param}')`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      req.newNinjaId = result;
      next();
    }
  );
}

module.exports = { getNinjasByVillage, createNewNinja };
