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
            const taskId = Number(req.params.id);

            if (isNaN(taskId)) {
                throw new Error(`Please verify the provided id, it's not a number`);
            };

            const task = await Task.findByPk(taskId);

            if (!task) {
                throw new Error(`Task doesn't exist !`)
            };

            await Task.update({
                ...req.body
            }, {
                where: {
                    ...req.params
                }
            });

            res.json(req.body.name);


        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    },


    //*delete a task
    async deleteTask(req, res) {
        try {

            const taskId = Number(req.params.id);

            if (isNaN(taskId)) {
                throw new Error(`Please verify the provided id, it's not a number`);
            };

            const task = await Task.findByPk(taskId);

            if (!task) {
                throw new Error(`Task doesn't exist !`)
            };

            await Task.destroy({ where: { ...req.params } });

            res.status(204);

        } catch (error) {

            res.status(500).json({
                "Server Error": error.message
            });
        }
    }


};

module.exports = taskController;