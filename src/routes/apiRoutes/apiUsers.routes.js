const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/apiControllers/apiUserController');

/*sign up*/
router.post("/api/register", apiUserController.register);

/*login*/
router.post("/api/login", apiUserController.login);

/*create a task*/
router.post("/api/:id/createtask", apiUserController.createTask);

/*list of tasks*/
router.get("/api/:id/listoftasks", apiUserController.listOfTasks);

/*update a task*/
router.put("/api/:id/updatetask/:task", apiUserController.updateTask);

/*check a task*/
router.put("/api/:id/checktask/:task", apiUserController.checkTask);

/*delete a task*/
router.delete("/api/:id/deletetask/:task", apiUserController.deleteTask);

/*list of tasks marked as check*/
router.get("/api/:id/taskscompleted", apiUserController.tasksCompleted);

module.exports = router;