import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController'
import { RoomController } from './controllers/RoomController'
import { roomRepository } from './repositories/roomRepository'

export const routes = Router()


routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.get('/rooms', new RoomController().list)