const {Router} = require('express');
const router = Router();

const { getAdminsLogin, getAdminLogin, createAdminLogin, deleteAdminLogin } = require('../controllers/login.admin.controller');

router.route('/')
    .get(getAdminsLogin)
    .post(createAdminLogin)

router.route('/:id')
    .get(getAdminLogin)
    .delete(deleteAdminLogin)

module.exports = router;