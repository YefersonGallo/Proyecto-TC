const {Router} = require('express');
const router = Router();

const { getAdmins, createAdmin, getAdmin, updateAdmin, deleteAdmin } = require('../controllers/admin.controller');

router.route('/')
    .get(getAdmins)
    .post(createAdmin)

router.route('/:idAdmin')
    .get(getAdmin)
    .put(updateAdmin)
    .delete(deleteAdmin)

module.exports = router;