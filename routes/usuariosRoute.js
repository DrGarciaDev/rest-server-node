const { Router } = require('express');
const {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
} = require('../controllers/usuariosController');

const router = Router();

router.get('/', getUsuarios);

router.post('/', postUsuarios);

router.put('/:usuario_id', putUsuarios);

router.patch('/', patchUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;