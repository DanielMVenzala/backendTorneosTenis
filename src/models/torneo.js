// src/models/Torneo.js
const mongoose = require("mongoose");

const PartidoSchema = new mongoose.Schema(
  {
    jugador1: {
      type: String,
      default: "",
    },
    jugador2: {
      type: String,
      default: "",
    },
    resultado: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const RondaSchema = new mongoose.Schema(
  {
    cuartos_de_final: {
      partidos: {
        type: [PartidoSchema],
        default: [],
      },
    },
    semifinales: {
      partidos: {
        type: [PartidoSchema],
        default: [],
      },
    },
    final: {
      partidos: {
        type: [PartidoSchema],
        default: [],
      },
    },
  },
  { _id: false }
);

const TorneoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
    required: true,
  },
  ronda: {
    type: RondaSchema,
    required: true,
  },
});

module.exports = mongoose.model("Torneo", TorneoSchema);
