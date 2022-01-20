import { Request, Response } from "express";
import { prismaClient } from "../../../shared/infra/database/prismaClient";

class CreateThingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const { id: user_id } = request.params;

        const thing = await prismaClient.things.create({
            data: {
                name,
                user_id
            }
        })
        
        return response.status(201).json(thing);
    }
}

export { CreateThingController }