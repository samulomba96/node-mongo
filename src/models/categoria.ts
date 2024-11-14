import mongoose from "mongoose";

//definiamo il modello di mongoose
// si potrebbe usare anche il type al posto di interface
//interfaccia
interface ICategoria {
    titolo: string,
    sottotitolo?: string,
    descrizione?:string,
    dataCreazione: Date,
    attiva: boolean
}

//schema
const categoriaSchema = new mongoose.Schema<ICategoria>({
    titolo: { type: String, required: true },
    sottotitolo: String,
    descrizione: { type: String },
    dataCreazione: { type: Date, default: Date.now() },
    attiva: { type: Boolean, default: true }

});

//modello
export const Categoria = mongoose.model<ICategoria>("Categoria", categoriaSchema, "categorie");