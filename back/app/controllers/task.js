const { Task } = require('../models');

const taskController = {

    listTasks: async function (req, res) {
        //* Récupérer la liste des taches
        const tasks = await Task.findAll({
            order: [['id', 'DESC']]
        });
        //* Renvoyer la liste des taches en json
        res.json(tasks);
    },

    //*create a new tasks
    async createNewTask(req, res) { },

    //*update a task
    async updateTask(req, res) { },

    //*delete a task
    async deleteTask(req, res) { },


};

module.exports = taskController;
