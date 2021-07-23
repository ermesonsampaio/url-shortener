import {
  Router,
  Request,
  Response,
} from 'express';
import { LinkService } from '../services/link.service';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const result = await new LinkService().create(req.body);

    return res.status(200).json({ link: result });
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.put('/', async (req: Request, res: Response) => {
  try {
    await new LinkService().update(req.body);

    return res.status(200).json({ message: 'link updated successfully' });
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.delete('/', async (req: Request, res: Response) => {
  try {
    await new LinkService().delete(req.body.id);

    return res.status(200).json({ message: 'link deleted successfully' });
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const links = await new LinkService().findAll();

  return res.status(200).json(links);
});

router.get('/find', async (req: Request, res: Response) => {
  const links = await new LinkService().find(req.query);

  return res.status(200).json(links);
});

export default router;
