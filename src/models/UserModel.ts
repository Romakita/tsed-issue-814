import {Email, Property, Required} from "@tsed/common";

export class UserModel {
  @Property()
  id: string;

  @Email()
  @Required()
  email: string;
}
