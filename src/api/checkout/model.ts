import joi from "joi"
import j2s from "joi-to-swagger"

const schema = joi.object().keys({
  name: joi.string().required()
})

export const CheckoutSchema = j2s(schema).swagger