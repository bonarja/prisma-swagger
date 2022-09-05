import { SwCheckoutRouter } from "@/api/checkout/routes";
import type { OAS3Definition } from "swagger-jsdoc";


// https://editor.swagger.io
export const SwaggerSetup: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de mi API",
        version: "1.0.0"
    },
    servers: [{
        url: "http://localhost:3000"
    }],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        }
    },
    paths: {
        ...SwCheckoutRouter
    }
}


// const swaggerOptions: OAS3Options = {
//     swaggerDefinition,
//     apis: ["./src/api/**/*api.ts"]
// }

// export const SwaggerSetup = swaggerDefinition