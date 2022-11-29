const conDB = require('../dao/dbconsultas.js');
const Profissinais = require('../models/profissionais')

const listarProfissionais = (req, res) => {
    conDB.query(Profissinais.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

module.exports = {
    listarProfissionais
}