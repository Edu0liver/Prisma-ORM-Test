import { hash } from "bcrypt";
import { Request, Response } from "express";
import { prismaClient } from '../../../shared/infra/database/prismaClient';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const passwordCrypt = await hash(password, 8);
        
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordCrypt
            }
        })

        return response.status(201).json(user);
    }
}

export { CreateUserController }