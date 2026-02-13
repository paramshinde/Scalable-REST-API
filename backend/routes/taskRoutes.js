const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
    getAllTasks
} = require('../controllers/taskController');
/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */


router.post('/', auth, createTask);
/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */

router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

// Admin route
router.get('/admin/all', auth, role('admin'), getAllTasks);

module.exports = router;
