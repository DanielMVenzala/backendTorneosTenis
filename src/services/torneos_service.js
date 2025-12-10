const Torneo = require("../models/torneo");

const getAllTorneos = async () => {
  return await Torneo.find();
};

const guardarResultado = async ({
  nombreTorneo,
  ronda,
  jugador1,
  jugador2,
  resultado,
}) => {
  // 1. Buscar el torneo por nombre
  const torneo = await Torneo.findOne({ nombre: nombreTorneo });
  if (!torneo) {
    const error = new Error("Torneo no encontrado");
    error.status = 404;
    throw error;
  }

  // 2. Acceder a la ronda correcta
  // ronda será algo como "cuartos_de_final" | "semifinales" | "final"
  const rondaObj = torneo.ronda[ronda];
  if (!rondaObj) {
    const error = new Error("La ronda indicada no existe en este torneo");
    error.status = 400;
    throw error;
  }

  const partidos = rondaObj.partidos;

  // 3. Buscar el primer hueco vacío
  const indiceLibre = partidos.findIndex(
    (p) => !p.jugador1 && !p.jugador2 && !p.resultado
  );

  if (indiceLibre === -1) {
    const error = new Error("No hay más huecos disponibles en esta ronda");
    error.status = 400;
    throw error;
  }

  // 4. Rellenar el hueco
  partidos[indiceLibre] = { jugador1, jugador2, resultado };

  // 5. Guardar
  await torneo.save();

  return torneo;
};

module.exports = {
  getAllTorneos,
  guardarResultado,
};
