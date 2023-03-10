import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const user = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(202).json(user);
    } catch {
      return response
        .status(400)
        .json({ error: "Only admin can list all users" });
    }
  }
}

export { ListAllUsersController };
