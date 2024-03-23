const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB is connect now");
    console.log(`server is running port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
