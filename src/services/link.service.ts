import { getRepository } from 'typeorm';
import { uuid } from 'uuidv4';
import { LinkModel } from '../database/models/link.entity';

type LinkData = Omit<LinkModel, 'id' | 'code' | 'created_At' | 'updated_At'>;

interface UpdateParams {
  id: string;
  update: {
    from: string;
  }
}

interface FindParams {
  id?: string;
  from?: string;
  authorId?: string;
}

export class LinkService {
  private repository = getRepository(LinkModel);

  private generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible
        .charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  async create(linkData: LinkData): Promise<LinkModel> {
    const result = await this.repository.save({
      id: uuid(),
      code: this.generateCode(),
      ...linkData,
    });

    return result;
  }

  async update({ id, update }: UpdateParams): Promise<void> {
    await this.repository.update(id, update);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async find(where: FindParams): Promise<LinkModel[]> {
    const links = await this.repository.find({ where });

    return links;
  }

  async findAll(): Promise<LinkModel[]> {
    const links = await this.repository.find();

    return links;
  }

  async authorLinks(authorId: string): Promise<LinkModel[]> {
    const links = await this.repository.find({
      where: {
        author: {
          id: authorId,
        },
      },
    });

    return links;
  }
}
