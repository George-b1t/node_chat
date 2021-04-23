import { getCustomRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connections";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string
}

class ConnectionsService {
  private ConnectionsRepository: Repository<Connections>;

  constructor() {
    this.ConnectionsRepository = getCustomRepository(ConnectionsRepository);
  };

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.ConnectionsRepository.create({
      socket_id,
      id,
      user_id,
      admin_id
    });

    await this.ConnectionsRepository.save(connection);

    return connection;
  };

  async findByUserId(user_id: string) {
    const connection = await this.ConnectionsRepository.findOne({
      user_id
    });

    return connection;
  }
};

export { ConnectionsService };