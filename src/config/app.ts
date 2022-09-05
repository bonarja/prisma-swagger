import express, { json, urlencoded } from "express"
import cors from "cors"
import router from "./routes"
import swaggerUi from "swagger-ui-express"
import { SwaggerSetup } from "@/config/swagger"

export class App {
    private readonly app: express.Application

    constructor() {
        this.app = express()
    }

    public start(port: number) {
        this.app.use(cors(), json(), urlencoded({ extended: true }))
        this.app.use("/api", router)
        this.app.use("/api", swaggerUi.serve, swaggerUi.setup(SwaggerSetup))
        this.app.listen(port, () => {
            console.log(`Server is running in: http://localhost:${port}`)
        })
    }
}