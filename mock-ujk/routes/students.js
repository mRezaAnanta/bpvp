const express = require('express')
const router = express.Router()
const controller = require('../controllers/studentController.js')

router.get('/', controller.getAllStudents)
router.get('/:id', controller.getStudentsById)
router.post('/', controller.createStudentData)
router.put('/:id', controller.updateStudentData)
router.delete('/:id', controller.deleteStudentData)

module.exports = router
