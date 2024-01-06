const express = require("express");
const { encontrarEndereco } = require("./controladores/enderecos");

const rotas = express();

rotas.get("/enderecos/:cep", encontrarEndereco);

module.exports = rotas;