import { Application, Router } from 'express';

import linkRoutes from './link.routes';
import redirectRoutes from './redirect.routes';

const router = Router();

router.use('/link', linkRoutes);
router.use('/redirect', redirectRoutes);

export default (app: Application) => app.use('/v1', router);
