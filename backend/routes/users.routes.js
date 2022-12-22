const UsersController = require('../controllers/users.controller')
const router = require('express').Router()

router.get('/', UsersController.getAllDatas)
router.post('/', UsersController.postData)
router.put('/:id', UsersController.updateData)
router.get('/:id', UsersController.getData)
router.delete('/:id', UsersController.deleteData)

module.exports = router
