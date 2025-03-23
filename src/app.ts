import { errorHandling } from "@/middlewares/errorHandling";
import express from "express";
import "express-async-errors";

const app = express()

app.use(express.json())

app.use(errorHandling)

export { app }


