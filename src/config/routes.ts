import { checkoutRouter } from "@/api/checkout/routes";
import { Router } from "express";


const router = Router()
router.use("/checkout", checkoutRouter)


export default router