const mongoose = require("mongoose")

const startDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/teste")
        console.log("mongoDB conectado com Sucesso!")
    } catch (error) {
        console.error(`Falha ao se conectar ao mongoDB: ${error}`)
    }
}

module.exports = startDB