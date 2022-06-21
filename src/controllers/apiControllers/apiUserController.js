const usersModel = require('../../models/usersModel');

const methods = {
    register: async (req, res) => {
        try {
            const user = req.body
            const userCreated = await usersModel.createUser(user);
            if (userCreated) {
                if (userCreated == 1) {
                    res.json({
                        meta: {
                            status: 150,
                            mssg: "The email you typed is already in use. Please, use another email."
                        }
                    })
                } else {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "User was created with success.",
                        }
                    });
                }
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "Impossible to create the user. Please try again later."
                    }
                });
            }
        } catch (error) {
            return error
        }
    },
    login: async (req, res) => {
        try {
            const userToFind = req.body;
            const userFinded = await usersModel.findUser(userToFind);
            if (userFinded) {
                if (Object.keys(userFinded).length > 0) {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "User finded. Logged successful.",
                            user: {
                                userId: userFinded.id,
                                name: userFinded.name,
                                lastname: userFinded.lastname,
                                email: userFinded.email
                            }
                        }
                    });
                } else {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "It was not possible to find the user. Please, check your email or password again"
                        }
                    });
                }
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was not possible to access. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error
        }
    },
    createTask: async (req, res) => {
        try {
            const userId = req.params.id;
            const infoTask = req.body;
            const taskCreated = await usersModel.createTask(userId, infoTask);
            if (taskCreated) {
                res.json({
                    meta: {
                        status: 200,
                        mssg: "Task was created with success.",
                    }
                });
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was no possible to create the task. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error
        }

    },
    listOfTasks: async (req, res) => {
        try {
            const userId = req.params.id;
            const tasks = await usersModel.listOfTasks(userId);
            if (tasks) {
                if (tasks.tasks.length > 0) {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "Search successful.",
                            tasks: tasks.tasks
                        }
                    });
                } else {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "You do not have tasks.",
                        }
                    });
                }
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "Impossible to check the tasks. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error;
        }
    },
    updateTask: async (req, res) => {
        try {
            const newInfo = req.body;
            const userId = req.params.id;
            const taskId = req.params.task;
            const userUpdated = await usersModel.updateTasks(userId, newInfo, taskId);
            if (userUpdated) {
                res.json({
                    meta: {
                        status: 201,
                        mssg: "Task updated with success."
                    }
                });
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was not possible to update the task. Please, try again later."
                    }
                });
            }

        } catch (error) {
            return error;
        }
    },
    checkTask: async (req, res) => {
        try {
            const userId = req.params.id;
            const taskId = req.params.task;
            const taskCompleted = await usersModel.checkTask(userId, taskId);
            if (taskCompleted) {
                res.json({
                    meta: {
                        status: 201,
                        mssg: "Task was checked as completed."
                    }
                });
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was not possible to mark as completed the task. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error
        }
    },
    deleteTask: async (req, res) => {
        try {
            const userId = req.params.id;
            const taskId = req.params.task;
            const taskDeleted = await usersModel.deleteTask(userId, taskId);
            if (taskDeleted) {
                res.json({
                    meta: {
                        status: 200,
                        mssg: "Task was deleted with success."
                    }
                });
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was not possible to delete the task. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error;
        }
    },
    tasksCompleted: async (req, res) => {
        try {
            const userId = req.params.id;
            const tasks = await usersModel.tasksCompleted(userId);
            if (tasks) {
                if (tasks.length > 0) {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "Search succesful.",
                            tasks
                        }
                    });
                } else {
                    res.json({
                        meta: {
                            status: 200,
                            mssg: "You do not have completed tasks.",
                        }
                    });
                }
            } else {
                res.json({
                    meta: {
                        status: 500,
                        mssg: "It was not possible to check the completed tasks. Please, try again later."
                    }
                });
            }
        } catch (error) {
            return error;
        }
    }
}

module.exports = methods;