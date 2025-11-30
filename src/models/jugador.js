const mongoose = require("mongoose");

const jugadorSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    ranking: Number,
    pais: String,
    foto: String
}, { collection: "jugadores" }); 

module.exports = mongoose.model("Jugador", jugadorSchema);
