import {PlatformApplication} from "@tsed/common";
import {TestContext} from "@tsed/testing";
import * as SuperTest from "supertest";
import {Server} from "../Server";
import {UsersController} from "./UsersController";

describe("UsersController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(TestContext.bootstrap(Server, {
    mount: {
      "/": UsersController
    }
  }));
  beforeEach(TestContext.inject([PlatformApplication], (app: PlatformApplication) => {
    request = SuperTest(app.raw);
  }));

  afterEach(TestContext.reset);

  it("should call POST /users and validate email", async () => {
    const response = await request
      .post("/users")
      .send({
        email: "test@test.fr"
      })
      .expect(200);

    expect(response.body).toEqual({email: "test@test.fr"});
  });

  it("should call POST /users and throw bad request", async () => {
    const response = await request
      .post("/users")
      .send({
        email: "test_test.fr"
      })
      .expect(400);

    expect(response.text).toEqual(`Bad request on parameter "request.body".<br />At UserModel.email should match format "email"`);
  });
});
