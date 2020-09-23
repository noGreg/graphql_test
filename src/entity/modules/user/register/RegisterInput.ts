import { Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { DoesEmailAlreadyExist } from './doesEmailAlreadyExist'

@InputType()
export class RegisterInput {
  @Field() 
  @Length(1, 255)
  firstName: string;

  @Field() 
  @Length(1, 255)
  lastName: string;

  @Field() 
  @IsEmail()
  @DoesEmailAlreadyExist({ message: "Email already exists."})
  email: string;

  @Field() 
  password: string;

}