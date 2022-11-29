const Express = require('express');
const router = Express.Router();

const Tratamento = require("./controller/TratamentoController");
const Consultas = require("./controller/ConsultasController");
const Profissionais = require("./controller/ProfissionaisController");

router.get("/consultas", Consultas.listarConsultas);
router.get("/profissionais", Profissionais.listarProfissionais);

router.get("/tratamentos", Tratamento.listarTratamento);
router.get("/tratamentos/:id_tratamento", Tratamento.listarTratamentoid);
router.post("/tratamentos", Tratamento.cadastrarTratamentos);
router.delete("/tratamentos", Tratamento.excluirTratamentos);
router.put("/tratamentos", Tratamento.editarTratamentos);

module.exports = router;