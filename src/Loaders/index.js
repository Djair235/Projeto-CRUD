const startDB = require("../loaders/mongodb")

class Loaders {
    start() {
        startDB()
    }
}

module.exports = new Loaders()