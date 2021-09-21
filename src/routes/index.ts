import { Router } from 'express';
import userRoutes from './user.routes';

const Routes = Router();

/**
 * User
 */
Routes.use('/user', userRoutes);

export default Routes;
