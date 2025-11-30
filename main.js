const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const v1TorneosRouter = require("./src/routes/torneos_routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//Se define el puerto
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Base de datos conectada"))
  .catch((error) =>
    console.log("Error al conectar con la base de datos", error)
  );

app.use("/api/v1/torneos", v1TorneosRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
