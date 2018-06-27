import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = new Router();

// Get all Users
router.route('/users').get(UserController.getUsers);

// Get one user by cuid
router.route('/users/:cuid').get(UserController.getUser);

// Add a new user
router.route('/users').post(UserController.addUser);

// SignUp to an Event
router.route('/signup/:user/:event').post(UserController.signUp);

// Delete a user by cuid
router.route('/users/:cuid').delete(UserController.deleteUser);


export default router;
