const app = require("../src/app")
const Loaders = require("../src/loaders/index")

function ligarServidor() {
    try {
        Loaders.start()
        app.listen(3333, () => {
            console.log("Server running on port 3333.")
        })
    } catch (error) {
        console.log(`Falha ao iniciar o servidor: ${error}`)
    }
}

ligarServidor()