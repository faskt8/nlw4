import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.listen(3333, () => console.log("Server is running!"));


/** 
//Método PATCH --> ALTERAR UMA INFORMAÇÃO ESPECIFICA


//ROTAS
//metodos diferentes podem ter rotas iguais
app.get("/", (request , response) => {
  return response.json({message:
  "Hello World - NLW04!"})
})

//1 param - Rota(recurso)
//2 param - request, response
app.post("/", (request, response) => {
  return response.json({message:
  "Os dados foram salvos com sucesso!"})
})*/