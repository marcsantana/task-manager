import { UserController } from "@/controllers/users-controller";
import { Router } from "express";

const usersRoutes = Router()
const userControllers = new UserController()

usersRoutes.get("/", userControllers.create)

export { usersRoutes }