const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const novoUsuario = new Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true, default: "default"},
    idade: {type: Number, required: true, default: "00"},
    body: {type: String, required: true, default: "default"},
    date: {type: String, default: () => new Date().toLocaleString("pt-BR")}
})

const novoUsuarioModel = mongoose.model("novoUsuario", novoUsuario)

module.exports = novoUsuarioModel

