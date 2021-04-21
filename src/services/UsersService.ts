import { getCustomRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<Users>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  };

  async create(email: string) {
    const userAlreadyExists = await this.usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      return userAlreadyExists;
    };

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;
  };
};

export { UsersService };
