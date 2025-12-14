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

const guardarResultado = async (req, res) => {
  const { nombreTorneo, ronda, jugador1, jugador2, resultado } = req.body;

  // Validaciones básicas
  if (!nombreTorneo || !ronda || !jugador1 || !jugador2 || !resultado) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Faltan campos obligatorios en el body" },
    });
  }

  try {
    const resultadoNuevo = await torneosService.guardarResultado({
      nombreTorneo,
      ronda,
      jugador1,
      jugador2,
      resultado,
    });

    return res.status(201).send({ status: "OK", data: resultadoNuevo });
  } catch (error) {
    return res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || String(error) },
    });
  }
};

module.exports = {
  getTorneos,
  guardarResultado,
};
