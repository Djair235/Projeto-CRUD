const { default: mongoose } = require("mongoose")
const userModel = require("../Models/userModel")

class userController {
    async criarUser(req, res) {
        try {
            const novoUser = await userModel.create(req.body)
            console.log("Usuário criado com Sucesso!")
            return res.status(200).json({message: "Novo usuário criado com Sucesso!"})
        } catch (error) {
            console.log(`Falha ao criar um novo usuário: ${error}`)
            return res.status(404).json({message: `Falha ao criar um novo Usuário!`})
        }
    }

    async listarUsers(req, res) {
        try {
            const listaUsuarios = await userModel.find()
            console.log("Lista de usuários encontrada com Sucesso!")
            return res.status(200).json(listaUsuarios)
        } catch (error) {
            console.log(`Falha ao encontrar os usuários: ${error}`)
            return res.status(404).json({message: `Falha ao encontrar os Usuários!`})
        }
    }

    async showUser(req, res) {
        try {
            const { id } = req.params
            const usuarioEspecifico = await userModel.findById(id)
            if(!usuarioEspecifico) {
                console.log("Usuário não existe.")
                return res.status(404).json({message: `Falha ao encontrar o Usuário especificado!`})
            }
            console.log("Usuário especificado Encontrado!")
            return res.status(200).json(usuarioEspecifico)
        } catch (error) {
            console.log(`Falha ao encontrar Usuário especificado: ${error}`)
            return res.status(404).json({message: `Falha ao encontrar Usuário especificado!`})
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params
            const usuarioAtualizado = await userModel.findByIdAndUpdate(id, req.body)
            if(!usuarioAtualizado) {
                console.log("Falha ao atualizar o Usuário!")
                return res.status(404).json({message: `Falha ao atualizar o Usuário!`})
            }
            console.log("Usuário atualizado com Sucesso!")
            return res.status(200).json({message: `Usuário atualizado com Sucesso!`})
        } catch (error) {
            console.log(`Falha ao atualizar o Usuário: ${error}`)
            return res.status(404).json({message: `Falha ao atualizar o Usuário!`})
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params
            const usuarioDeletado = await userModel.findByIdAndDelete(id)
            if(!usuarioDeletado) {
                console.log("Falha ao deletar o Usuário!")
                return res.status(404).json({message: `Falha ao deletar o Usuário!`})
            }
            console.log("Usuário deletado com Sucesso!")
            return res.status(200).json({message: `Usuário deletado com Sucesso!`})
        } catch (error) {
            console.log(`Falha ao deletar o Usuário: ${error}`)
            return res.status(404).json({message: `Falha ao deletar o Usuário!`})
        }
    }
}

module.exports = new userController()