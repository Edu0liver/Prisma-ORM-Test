import express from "express";
import { CreateThingController } from "../../../../modules/things/controllers/createThingController";

const thingsRoutes = express();

const createThingController = new CreateThingController();

thingsRoutes.post("/", createThingController.handle);

export { thingsRoutes };