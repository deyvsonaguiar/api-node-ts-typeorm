import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepository";
import { BadRequestError, NotFoundError } from "../helpers/api-errors";

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body

    if (!name) {
      throw new BadRequestError('O nome é obrigatório')
    }
    
    const newRoom = roomRepository.create({ name, description })
    await roomRepository.save(newRoom)
    
    return res.status(201).json(newRoom)
  }

  async roomSubject(req: Request, res: Response) {
    const { subject_id } = req.body
    const { idRoom } = req.params

    const room = await roomRepository.findOneBy({ id: Number(idRoom) })

    if (!room) {
      throw new NotFoundError('A Aula não existe')
    }

    const subject = await subjectRepository.findOneBy({ id: Number(subject_id) })

    if (!subject) {
      throw new NotFoundError('A disciplina não existe')
    }

    const roomUpdate = {
      ...room,
      subjects: [subject]
    }

    await roomRepository.save(roomUpdate)
    return res.status(204).send()

  }

  async list(req: Request, res: Response) {
    
    const rooms = await roomRepository.find({
      relations: {
        subjects: true,
        videos: true
      }
    })
    return res.json(rooms)
  }


}