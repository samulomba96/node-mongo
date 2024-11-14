// è come un servizio per fare delle connessioni con il DB (tipo i servizi di angular)
//qui dentro faremo delle funzioni

import { MongoClient } from "mongodb";

//inseriamo un prodotto nel database
export const insertProdotto = (nome:string, prezzo:number) => {

    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("amazon");
    const collection = db.collection("prodotti");

    const prodotto: Prodotto = {
        nome: nome,
        prezzo: prezzo
    }

    //insertone è una promise
    collection.insertOne(prodotto)
        .then(r => console.log(r))
        .catch(err => console.log(err))

}

//dichiariamo il tipo di prodotto con interface 
//normalmente andrebbe su un file model e lo importeremmo
//la mettiamo fuori da export per questo motivo

interface Prodotto {
    nome: String,
    prezzo: number,
}

//
export const getProdotti = async () => {

    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("amazon");
    const collection = db.collection("prodotti");

    //al posto di .then e catch usiamo await e async
    const prodotti = await collection.find().toArray();
    console.log(prodotti)

    await client.close
}

interface Prodotto {
    nome: String,
    prezzo: number,
}
