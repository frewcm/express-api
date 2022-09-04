const express = require('express')
const router = express.Router()
const { getGoals, postGoal,updateGoal, deleteGoal } = require('../controllers/goalcontroller')

router.get('/', getGoals)
router.post('/', postGoal)
router.put('/:id',updateGoal)
router.delete('/:id',deleteGoal)


module.exports = router