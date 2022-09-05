import type { RequestHandler } from "express"
import { PrismaClient } from "@prisma/client"

export class CheckoutController {

    static find: RequestHandler = async(_, res) =>  {
        const prisma = new PrismaClient()
        try {
            const checkouts = await prisma.checkout.findMany()
            res.send(checkouts)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    static findOne: RequestHandler = async(req, res) => {
        const { id } = req.params
        const prisma = new PrismaClient()
        try {
            const checkout = await prisma.checkout.findUnique({
                where: { id: Number(id) }
            })

            res.send(checkout)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    static create: RequestHandler = async(req, res) => {
        const { name } = req.body
        const prisma = new PrismaClient()
        try {
            const checkout = await prisma.checkout.create({
                data: {
                    name
                }
            })
            res.send(checkout)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}