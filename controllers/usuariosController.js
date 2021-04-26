const { request, response } = require('express');

const getUsuarios = (request = request, response = response) => {
    const { q, nombre } = request.query;

    response.json({
        msg: 'GET usuarios - desde controller',
        q: q,
        nombre: nombre
    });
}
const postUsuarios = (request = request, response = response) => {
    const body = request.body;
    const { id } = request.body;

    response.json({
        msg: 'POST usuarios - desde controller',
        id: id,
        body: body
    });
}
const putUsuarios = (request = request, response = response) => {
    const id = request.params.usuario_id;

    response.json({
        msg: 'PUT usuarios - desde controller',
        id: id
    });
}
const patchUsuarios = (request = request, response = response) => {
    response.json({
        msg: 'PATCH usuarios - desde controller'
    });
}

const deleteUsuarios = (request = request, response = response) => {
    response.json({
        msg: 'DELETE usuarios - desde controller'
    });
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios,
}