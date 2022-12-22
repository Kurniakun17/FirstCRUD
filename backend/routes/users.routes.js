const UsersController = require('../controllers/users.controller')
const router = require('express').Router()

router.get('/', UsersController.getAllData)
router.post('/', UsersController.postData)

module.exports = router
