const toCreate = (model) => {
    return `INSERT INTO tratamentos VALUES (${model.id_tratamento},${model.id_consulta}, '${model.tratamento}', ${model.valor})`;
}

const toReadAll = () => {
    return "SELECT * FROM tratamentos ORDER BY id_tratamento asc";
}

const toRead = (model) => {
    return `SELECT p.id_profissional,p.nome, p.especialidade, c.id_consulta, c.paciente, c.data as "DATA", c.horario as "HORÁRIO", t.id_tratamento, t.valor
    FROM profissionais p INNER JOIN consultas c on p.id_profissional = c.id_profissional
    INNER JOIN tratamentos t on t.id_consulta = c.id_consulta WHERE c.id_consulta = ${model.id_tratamento}`
}

const toDel = (model) => {
    return `DELETE FROM tratamentos WHERE id_tratamento = ${model.id_tratamento}`;
}

const toUpdate = (model) => {
    return `UPDATE tratamentos SET id_tratamento = ${model.id_tratamento}, id_consulta = ${model.id_consulta}, tratamento = '${model.tratamento}', valor = ${model.valor} where id_tratamento = ${model.id_tratamento}`;
}

module.exports = {
    toReadAll,
    toCreate,
    toDel,
    toUpdate,
    toRead
}