import { Request, Response } from "express"
import { roomRepository } from "../repositories/roomRepository"
import { videoRepository } from "../repositories/videoRepository"
import { BadRequestError } from "../helpers/api-errors"


export class VideoCOntroller {

  async create(req: Request, res: Response) {
    const { title, url } = req.body
    const { idRoom } = req.params

    const room = await roomRepository.findOneBy({ id: Number(idRoom) })

    if (!room) {
      throw new BadRequestError('A aula não existe')
    }

    const newVideo = videoRepository.create({
      title,
      url,
      room
    })
    
    await videoRepository.save(newVideo)
    return res.status(201).json(newVideo)
  }
}