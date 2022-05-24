const {
    Task
} = require('../models');

const taskController = {

    listTasks: async function (req, res) {
        try {
            //* Récupérer la liste des taches
            const tasks = await Task.findAll({
                order: [
                    ['id', 'DESC']
                ]
            });
            //* Renvoyer la liste des taches en json
            res.json(tasks);

        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    },

    //*create a new tasks
    async createNewTask(req, res) {
        try {
            await Task.create({
                ...req.body
            });

            res.json(`New task [ ${req.body.name} ] is added !`)

        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    },

    //*update a task
    async updateTask(req, res) {
        try {

        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    },


    //*delete a task
    async deleteTask(req, res) {
        try {

        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    }


};

module.exports = taskController;