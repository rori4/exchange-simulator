const express = require("express")
const { validate, ValidationError } = require("express-validation")
const bodyParser = require("body-parser")
const crypto = require("crypto")
const {
	cancelOrderValidation,
	placeOrderValidation,
} = require("./validations/orderValidations")

const port = process.env.PORT || 3001
const app = express()
const generateId = () => crypto.randomBytes(16).toString("hex")

//TODO: create dummy data
let orderBook = []

const ORDER_STATUS = {
	PENDING: "pending",
}

app.use(bodyParser.json())

app.get("/getOrderbook", (req, res) => {
	res.json(orderBook)
})

app.get("/getOrdersForUser/:userId", (req, res) => {
	const { userId } = req.params
	const ordersByUser = orderBook.filter((i) => i.userId === userId)
	res.json(ordersByUser)
})

app.post("/placeOrder", validate(placeOrderValidation, {}, {}), (req, res) => {
	const order = req.body
	const decoratedOrder = {
		orderId: generateId(),
		status: ORDER_STATUS.PENDING,
		...order,
	}
	orderBook.push(decoratedOrder)
	console.log(
		`PLACED ${decoratedOrder.side} @ ${decoratedOrder.price} ${decoratedOrder.amount}`
	)
	res.json(decoratedOrder)
})

app.put("/cancelOrder", validate(cancelOrderValidation, {}, {}), (req, res) => {
	const { orderId, userId } = req.body
	orderBook = orderBook.filter(
		(i) => i.orderId !== orderId && i.userId !== userId
	)
	//TODO: checks if orderId exists or userId exists
	res.json({ result: "success" })
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
