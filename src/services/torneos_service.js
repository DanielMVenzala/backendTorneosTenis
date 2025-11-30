const Torneo = require("../models/torneo");

const getAllTorneos = async () => {
  return await Torneo.find();
};

module.exports = {
  getAllTorneos,
};
