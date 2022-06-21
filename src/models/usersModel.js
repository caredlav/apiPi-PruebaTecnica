const usersDB = require('../database/models');
const tasksDB = require('../database/models');
const bcryptjs = require('bcryptjs');

const usersModel = {

    createUser: async (user) => {
        try {
            const userIfExits = user.email;
            const userTofind = await usersDB.User.findOne({
                where: {
                    email: userIfExits
                }
            });
            if (!userTofind) {
                await usersDB.User.create({
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    password: bcryptjs.hashSync(user.pass, 10)
                });
            } else {
                return 1;
            }
        } catch (error) {
            return false;
        }
    },
    findUser: async (user) => {
        try {
            let userTofind = await usersDB.User.findOne({
                where: {
                    email: user.email
                }
            });
            if (bcryptjs.compareSync(user.pass, userTofind.password)) {
                return userTofind;
            } else {
                return userTofind = {};
            }
        } catch (error) {
            return false;
        }
    },
    createTask: async (user, info) => {
        try {
            await tasksDB.Task.create({
                priority: info.priority,
                info_task: info.details,
                status: 0,
                users_id: user
            });
        } catch (error) {
            return false;
        }
    },
    listOfTasks: async (user) => {
        try {
            const list = await usersDB.User.findAll({
                include: [{ association: "tasks" }],
                where: { id: user }
            });
            return list[0];
        } catch (error) {
            return false;
        }
    },
    updateTasks: async (user, infoTask, taskId) => {
        try {
            await tasksDB.Task.update({
                include: [{ association: "users" }],
                priority: infoTask.priority,
                info_task: infoTask.details
            }, {
                where: {
                    id: taskId,
                    users_id: user
                }
            });
        } catch (error) {
            return false;
        }
    },
    checkTask: async (user, task) => {
        try {
            await tasksDB.Task.update({
                status: 1
            }, {
                where: {
                    id: task,
                    users_id: user
                }
            });
        } catch (error) {
            return false;
        }
    },
    deleteTask: async (user, task) => {
        try {
            await tasksDB.Task.destroy({
                where: {
                    id: task,
                    users_id: user
                }
            });
        } catch (error) {
            return false;
        }
    },
    tasksCompleted: async (user) => {
        try {
            const list = await tasksDB.Task.findAll({
                where: {
                    users_id: user,
                    status: 1
                }
            });
            return list;
        } catch (error) {
            return false;
        }
    }
}

module.exports = usersModel;