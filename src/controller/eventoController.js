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
                return res.status(200).json(eventos)
            }
            const eventos = await Evento.paginate({}, options);
            return res.status(200).json(eventos);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    static cadastrarEvento = async (req, res) => {
        try {
            const { titulo, descricao, dataInicio, dataFim, local, imagem  } = req.body;
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
            console.log(error)
            res.status(500).json({ error: true, code: 500, message: "Erro interno no servidor cadastro" });
        }
    }

    static listarEventosId = async (req, res) => {
        try {
            const { id } = req.params;
            const evento = await Evento.findById(id);

            if (!evento) {
                return res.status(404).json({ error: true, code: 404, message: "Evento não encontrado" })
            }
            return res.status(200).json(evento);
        } catch (error) {
            res.status(500).json({ error: true, code: 500, message: "Erro interno no servidor por ID" });
        }
    }

   
}
    
