//const express = require("express")
import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import proyectoRoutes from "./routes/proyectoRoutes.js"
import tareaRoutes from "./routes/tareaRoutes.js"
import cors from "cors"

const app = express()
app.use(express.json())

dotenv.config()

conectarDB()

// configurar cors

const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)){
            // Puede consultar la API
            callback(null, true)
        }else{
            // No está permitido
            callback(new Error("Error de Cors"))
        }
    }
}

app.use(cors(corsOptions))

// Routing
app.get('/', (req,res)=>{
    res.send("Qué pasa ..")
})
/* app.post('/', (req,res)=>{
    res.send('Desde post ...')
}) */

app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})