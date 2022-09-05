import { Router } from "express";
import type { OAS3Definition } from "swagger-jsdoc";
import { CheckoutController } from "./controller";
import { CheckoutSchema } from "./model";


const router = Router();
router.get("/", CheckoutController.find);
router.get("/:id", CheckoutController.findOne);
router.post("/", CheckoutController.create);

const SwCheckoutRouter: OAS3Definition["paths"] = {
  "/checkout": {
    get: {
      summary: "Gel all checkout register",
      tags: ["checkout"],
      responses: {
        200: {
            description: "test"
        }
      }
    },
    post: {
        summary: "Register new checkout",
        tags: ["checkout"],
        requestBody: {
            content: {
                "aplication/json": {
                    schema: {
                        ...CheckoutSchema
                    }
                }
            }
        },
        responses: {
            200: {
              description: "User created",
            },
            default: {
              "description": "Error message"
            }
        }
    },
  },
};

export { router as checkoutRouter, SwCheckoutRouter };
