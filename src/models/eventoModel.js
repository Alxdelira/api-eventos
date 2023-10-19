import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const eventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
    },
    dataInicio: {
        type: Date,
        required: true,
    },
    dataFim: {
        type: Date,
        required: true,
    },
    local: {
        type: String,
        required: true,
        trim: true,
    },
    imagem: {
        type: String,        
        trim: true,
    },
    criadoEm: {
        type: Date,
        required: true,
        default: Date.now,
    },
    atualizadoEm: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

eventoSchema.plugin(mongoosePaginate);

const Evento = mongoose.model("Evento", eventoSchema);

export default Evento;