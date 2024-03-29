import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";
import { BadRequestError } from "../helpers/api-errors";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    if (!name) {
      throw new BadRequestError('O nome é obrigatório')
    }

    const newSubject = subjectRepository.create({ name })
    await subjectRepository.save(newSubject)
    return res.status(201).json(newSubject)
  }

}