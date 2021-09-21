import { adapterRoute } from 'adapters';
import { Router } from 'express';
import { makeAllUserController } from 'useCases/User/All';
import { makeCreateUserController } from 'useCases/User/Create';
import { makeDeleteUserController } from 'useCases/User/Delete';
import { makeFindUserController } from 'useCases/User/Find';
import { makeUpdateUserController } from 'useCases/User/Update';

const userRoutes = Router();

/**
 * User
 */
userRoutes.get('/', adapterRoute(makeAllUserController));
userRoutes.post('/', adapterRoute(makeCreateUserController));
userRoutes.delete('/:id', adapterRoute(makeDeleteUserController));
userRoutes.get('/:id', adapterRoute(makeFindUserController));
userRoutes.patch('/:id', adapterRoute(makeUpdateUserController));

export default userRoutes;
