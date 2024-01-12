import express from 'express'
import UserController from '../controller/userController.js'
const usersRouter = express.Router()
usersRouter.get('/getUser',UserController.getUsers)
usersRouter.post('/createUser',UserController.createUsers)
usersRouter.patch('/updateUser',UserController.updateUsers)
usersRouter.delete('/deleteUser',UserController.deleteUsers)
export default usersRouter