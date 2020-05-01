import {TestContext} from "@tsed/testing";
import {UsersController} from "./UsersController";

describe("UsersController", () => {
  beforeEach(TestContext.create);
  afterEach(TestContext.reset);

  it("should do something", TestContext.inject([UsersController], (controller: UsersController) => {
    expect(controller).toBeInstanceOf(UsersController);
  }));
});
