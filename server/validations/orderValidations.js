const { Joi } = require("express-validation")

const placeOrderValidation = {
	body: Joi.object({
		price: Joi.number().required(),
		amount: Joi.number().required(),
		side: Joi.string().valid("BID", "ASK").required(),
		userId: Joi.string().required(),
	}),
}

const cancelOrderValidation = {
	body: Joi.object({
		orderId: Joi.string().required(),
		userId: Joi.string().required(),
	}),
}

module.exports = {
	placeOrderValidation,
	cancelOrderValidation,
}
