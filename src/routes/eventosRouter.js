import expres from 'express';
import EventoController from '../controller/eventoController.js';

const router = expres.Router();

router
    .get('/eventos', EventoController.listarEventos)
    .post('/eventos', EventoController.cadastrarEvento);

export default router;