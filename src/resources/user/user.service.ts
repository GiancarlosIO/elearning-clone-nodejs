import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { classToPlain } from 'class-transformer';

import { User } from './user.entity';

import { TUserCredentials } from './user.types';

const userService = {
  async getCurrentUser(id: number) {
    const userRepository = getRepository(User);
    const currentUser = await userRepository.find({ id });

    return currentUser;
  },
  async createUser(userData: TUserCredentials) {
    const userRepository = getRepository(User);
    const oldUser = await userRepository.findOne({ email: userData.email });

    if (!userData.email) {
      throw new Error('email is required.');
    }
    if (!userData.password) {
      throw new Error('password is required');
    }

    if (oldUser) {
      throw new Error('user with the given email already exist.');
    }

    const encryptedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({
      ...userData,
      password: encryptedPassword,
    });
    let newUser: User;
    try {
      newUser = await await userRepository.save(user);
    } catch (errors) {
      if (errors.length) {
        throw new Error(errors);
      }
    }

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1y',
      }
    );

    return {
      user: classToPlain(newUser),
      token,
    };
  },
};

export default userService;
