const { request, response } = require('express');

const getUsuarios = (Request = request, Response = response) => {
    const { q, nombre } = Request.query;

    Response.json({
        msg: 'GET usuarios - desde controller',
        q: q,
        nombre: nombre
    });
}
const postUsuarios = (Request = request, Response = response) => {
    const body = Request.body;
    const { id } = Request.body;

    Response.json({
        msg: 'POST usuarios - desde controller',
        id: id,
        body: body
    });
}
const putUsuarios = (Request = request, Response = response) => {
    const id = Request.params.usuario_id;

    Response.json({
        msg: 'PUT usuarios - desde controller',
        id: id
    });
}
const patchUsuarios = (Request = request, Response = response) => {
    Response.json({
        msg: 'PATCH usuarios - desde controller'
    });
}

const deleteUsuarios = (Request = request, Response = response) => {
    Response.json({
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