import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from 'bcryptjs'
import { User } from "../../User";
import { RegisterInput } from './register/RegisterInput'

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg('data') { email, lastName, firstName, password }: RegisterInput,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName, 
      lastName, 
      email, 
      password: hashedPassword
    }).save();

    return user;
  }
}