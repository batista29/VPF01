const toReadAll = () => {
    return "SELECT * FROM consultas ORDER BY id_consulta asc";
}

module.exports = {
    toReadAll
}