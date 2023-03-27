import { Users } from '../entity/Users';
import { User } from '../interface/IUser';
import { AppDataSource } from '../postgres-connect';

export const usersDB: any = {};

const usersRepository = AppDataSource.getRepository(Users);

// get a user
usersDB.getUser = async (user: string) => {
  try {
    const rows = await usersRepository.findOneBy({
      name: user
    });

    return rows;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};

// create one user
usersDB.createOne = async (user: User) => {
  try {
    const new_user = new Users();
    new_user._id = user._id;
    new_user.name = user.name;
    new_user.password = user.password;

    const new_user_create = await usersRepository.save(new_user);

    return new_user_create;
  } catch (error) {
    throw new Error(`'Database Error', ${error}`);
  }
};
