import mongoose from "mongoose"
import dotenv from "dotenv"

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)

        const url = `${connection.connection.host}:${connection.connection.port} `
        console.log(`MongoDb Conectado en: ${url}`)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default conectarDB