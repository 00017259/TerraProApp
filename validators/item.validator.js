const Joi = require('joi')


const itemSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    color: Joi.string().required(),
    discount: Joi.number(),
    size: Joi.string().required()
})




module.exports = itemSchema