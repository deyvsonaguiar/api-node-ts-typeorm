import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController'

export const routes = Router()


routes.post('/subject', new SubjectController().create)