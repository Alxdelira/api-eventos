import Evento from "../models/eventoModel.js";

export default class EventoController {
    static listarEventos = async (req, res) => {
        try {
            const { titulo, descricao, dataInicio, dataFim, local, imagem } = req.query;
            const { page, limit } = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(limit, 10) || 10,
            };

            if (titulo) {
                const eventos = await Evento.paginate({ titulo: RegExp(titulo, "i") }, options);
            }
            const eventos = await Evento.paginate({}, options);
            return res.status(200).json(eventos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static cadastrarEvento = async (req, res) => {
        try {
            const { titulo, descricao, dataInicio, dataFim, local, imagem } = req.body;
            const novoEvento = new Evento({
                titulo,
                descricao,
                dataInicio,
                dataFim,
                local,
                imagem
            });

            const evento = await novoEvento.save();
            return res.status(201).json(evento);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}