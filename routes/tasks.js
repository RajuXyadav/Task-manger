const express = require('express');
const router = express.Router();

const {getAllTasks, createTasks,getTask,updateTask,deleteTaks} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTaks)

module.exports = router;