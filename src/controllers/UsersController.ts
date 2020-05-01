import {BodyParams, Controller, Post, Required} from "@tsed/common";
import {UserModel} from "../models/UserModel";

@Controller("/users")
export class UsersController {
  @Post("/")
  post(@BodyParams() @Required() user: UserModel) {
    return user;
  }
}
