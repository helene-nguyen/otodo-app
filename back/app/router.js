const express = require('express');
const router = express.Router();
const { listTasks, createNewTask, updateTask, deleteTask} = require('./controllers/task');

// Route pour la liste des taches
router.get('/tasks', listTasks);

//* Route pour ajouter une tache
router.post('/tasks', createNewTask);

//* Route pour modifier une tache
router.put('/tasks/:id', updateTask);

//* Route pour supprimer une tache
router.delete('/tasks/:id', deleteTask);

module.exports = router;
