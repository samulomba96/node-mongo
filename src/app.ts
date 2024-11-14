import { config } from "dotenv";
config()

import { insertProdotto, getProdotti} from "./driver";

import * as orm from "./orm"
orm.insertCategoria("abbigliamento"); //questo da mongoDB(da usare questo)
//orm.getCategorie().then(risultato => console.log(risultato)) //questo in console

//getProdotti()

//vediamo l'orm (object-relational mapping)
//ha uno "strato" in piu per controllare i dati e definire come sono fatti i prodotti 
//mongoose è un orm che si usa su node
//la importiamo con "npm i mongoose"



//richiamo della funzione di driver
//insertProdotto("bici", 120);
//insertProdotto("phone", 15);

// //la chiave del DB la prendo da mongo DB, poi la salviamo in una variabile d'ambiente 
// //per installare una variabile d'ambiente facciamo:
// //"npm install dotenv" in console
// //creiamo un file .env nella cartella globale dove incolleremo la stringa del richiamo del DB
// //successivamente richiamamo nella prima riga la variabile d'ambiente (vedi riga 1) 
// //e poi la lanciamo (riga 2)
// //successivamente creiamo una variabile o una constante dove colleghiamo il nome in cui abbiamo salvato la stringa sul file .env

// //mettiamo il punto interrogativo sulla chiave di connessione perche deve tornare o string o undefined 
// const connectionString = process.env.MONGODB_CONNECTION_STRING!;

// //per connettermi a mongoDb
// import { MongoClient } from "mongodb";

// const client = new MongoClient(connectionString);

// //connettamo e ci ritorna una promise 
// //cos è una promise è un costrutto di Js per eseguire operazioni asincrone tipo una fetch ad un server tramite richiesta http
// client.connect()
//     .then(c => { 
//         //callback quando va a buonfine
//         console.log("Connessione avvenuta con successo.");

//         //qui dovrei scrivere il codice per recuperare i dati

//         //chiudiamo la connessione (anche questa torna una promise)
//         c.close()
//             .then(() => {
//                 console.log("Connessione chiusa con successo");
//             })
//             .catch(err => {
//                 console.log(err)
//             });

//     })
//     .catch(err => {
//     //callback quando NON va a buonfine
//     console.log("Connessione fallita.");
//     console.log(err);
//     });

// //è una connessione asincrona e quindi arriva prima
// console.log("FINITO");

// //npm start per provare
// //CNTRL + C per terminare la connessione manualmente (durante lo sviluppo)