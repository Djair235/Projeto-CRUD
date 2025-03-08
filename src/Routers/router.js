const express = require("express")
const userController = require("../Controllers/userController")
const app = express()
const Router = express.Router()

Router.get("/teste", (req, res) => {
    console.log("ROTA TESTE FUNCIONANDO!")
    res.status(200).json({message: "ROUTER FUNCIONANDO"})
})

Router.post("/criarUsuario", userController.criarUser)
Router.get("/listarUsuarios", userController.listarUsers)
Router.get("/listarUsuarioEspecifico/:id", userController.showUser)
Router.put("/atualizarUsuario/:id", userController.updateUser)
Router.delete("/atualizarUsuario/:id", userController.deleteUser)

module.exports = Router