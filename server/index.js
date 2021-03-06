const express = require("express")
const { validate, ValidationError, Joi } = require("express-validation")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3001
const app = express()
const orderBook = []

const orderValidation = {
	body: Joi.object({
		price: Joi.number().required(),
		amount: Joi.number().required(),
		side: Joi.string().valid("BID", "ASK").required(),
		userId: Joi.string().required(),
	}),
}

app.use(bodyParser.json())

app.get("/getOrderbook", (req, res) => {
	res.json(orderBook)
})

app.get("/getOrdersForUser/:userId", (req, res) => {
	const { userId } = req.params
	console.log(userId)
	res.json(200)
})

app.post("/placeOrder", validate(orderValidation, {}, {}), (req, res) => {
	const order = req.body
	console.log(order)
	res.json(200)
})

app.put("/cancelOrder", (req, res) => {
	res.json(200)
})

app.use(function (err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(err.statusCode).json(err)
	}

	return res.status(500).json(err)
})

app.listen(port, () =>
	console.log(`REST server is listening on http://localhost:${port}/`)
)
