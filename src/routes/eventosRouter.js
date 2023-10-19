import express from 'express';
import EventoController from '../controller/eventoController.js';

const router = express.Router();

router
    .get('/eventos', EventoController.listarEventos)
    .get('/eventos/:id', EventoController.listarEventosId)
    .post('/eventos', EventoController.cadastrarEvento)

export default router;
