import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController'
import { RoomController } from './controllers/RoomController'
import { VideoCOntroller } from './controllers/VideoController'

export const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/video/:idRoom/create', new VideoCOntroller().create)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.get('/rooms', new RoomController().list)