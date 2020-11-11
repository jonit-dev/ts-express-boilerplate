import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, interfaces } from "inversify-express-utils";

import { IUser } from "./user.model";
import { UserService } from "./user.service";

@controller("/users")
export class UserController implements interfaces.Controller {
  constructor(@inject("UserService") private userService: UserService) {}

  @httpGet("/")
  private getUsers(req: Request, res: Response): IUser[] {
    return this.userService.getUsers();
  }

  @httpPost("/")
  private async createUser(req: Request, res: Response): Promise<IUser> {
    return await this.userService.createUser();
  }
}
