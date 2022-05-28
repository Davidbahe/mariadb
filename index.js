const express = require("express");
const app = express();

const pool = require("./database.js");
app.get("/products", async (req, res) => {
  try {
    //Get Connection
    const conn = await pool.getConnection();
    //Ejecutar el query
    const query = "SELECT * FROM products";
    //respuesta al cliente
    const rows = await conn.query(query);

    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/newproducts", async (req, res) => {
  console.log(req.body);

  const conn = await pool.getConnection();
  //Ejecutar el query
  const query = 'INSERT INTO products VALUE (?)';
    //respuesta al cliente
  const result = await conn.query(query, [req.body.name]);
  
  res.status(200).json(result);
})

app.listen(3000, () => {
  console.log('Server on port 3000', 3000);
});
