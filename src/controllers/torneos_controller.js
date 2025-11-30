//importamos la capa del servicio
const torneosService = require("../services/torneos_service");

//Definimos todos los métodos
const getTorneos = async (req, res) => {
  try {
    const torneos = await torneosService.getAllTorneos();

    res.status(200).json({
      status: "OK",
      data: torneos,
    });
  } catch (error) {
    console.error("Error en el controlador al obtener torneos:", error.message);
    res.status(500).json({
      status: "ERROR",
      message: "Fallo al obtener la lista de torneos.",
      error: error.message,
    });
  }
};

module.exports = {
  getTorneos,
};
