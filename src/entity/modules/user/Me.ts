import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../../User";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    let userId = ctx.req.session!.userId;
    if (!userId) return undefined;
    return User.findOne(userId);
  }
}