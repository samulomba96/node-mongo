import mongoose from "mongoose";
import { Categoria } from "./models/categoria";


//vediamo l'orm (object-relational mapping)
//ha uno "strato" in piu per controllare i dati e definire come sono fatti i prodotti 

//l'orm ha dentro di se il driver
export const insertCategoria = async (titolo: string, sottotitolo?:string, descrizione?:string) => {

    try {
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"amazon"});

       const categ = new Categoria();
       categ.titolo = titolo;
       categ.sottotitolo = sottotitolo;
       categ.descrizione = descrizione;

       return await categ.save()
       
    } catch (error) {
        console.log(error)
    } finally {
        await mongoose.disconnect();
    };

}

export const getCategorie = async () => {

    try {
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, {
       dbName:"amazon"});

       return await Categoria.find()
       
    } catch (error) {
        console.log(error)
    } finally {
        await mongoose.disconnect();
    };

}