import { Request, Response, Router } from 'express';
import { LinkService } from '../services/link.service';

const router = Router();

router.get('/:code', async (req: Request, res: Response) => {
  try {
    const [link] = await new LinkService().find(req.params);

    res.status(200).redirect(link.from);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
