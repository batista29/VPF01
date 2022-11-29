const conDB = require('../dao/dbconsultas.js');
const Tratamentos = require('../models/tratamentos')

const listarTratamento = (req, res) => {
    conDB.query(Tratamentos.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

const listarTratamentoid = (req, res) => {
    conDB.query(Tratamentos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};


const cadastrarTratamentos = (req, res) => {
    conDB.query(Tratamentos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const excluirTratamentos = (req, res) => {
    conDB.query(Tratamentos.toDel(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(204).end();
        } else {
            res.status(400).end();
        }
    });
};

const editarTratamentos = (req, res) => {
    conDB.query(Tratamentos.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarTratamento,
    cadastrarTratamentos,
    excluirTratamentos,
    editarTratamentos,
    listarTratamentoid
}