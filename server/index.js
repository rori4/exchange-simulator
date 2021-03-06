require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { validate, ValidationError } = require("express-validation")
const bodyParser = require("body-parser")
const {
	cancelOrderValidation,
	placeOrderValidation,
} = require("./validations/orderValidations")
const { generateId } = require("./utils")
const { dummyOrderBook } = require("./dummyData")
const { ORDER_STATUS } = require("./constants")

const port = process.env.PORT || 3001
const app = express()

app.use(cors()) // Access-Control-Allow-Origin: *

//TODO: create dummy data
let orderBook = process.env.DUMMY_DATA ? dummyOrderBook : []

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
	const orderIdxToCancel = orderBook.findIndex(
		(o) => o.orderId === orderId && o.userId === userId
	)
	const orderToCancel = orderBook[orderIdxToCancel]
	if (orderIdxToCancel !== -1) {
		orderBook.splice(orderIdxToCancel, 1)
		console.log(
			`CANCELLED ${orderToCancel.side} @ ${orderToCancel.price} ${orderToCancel.amount}`
		)
		res.json({ result: "success", orderId: orderId })
	} else {
		res.json({ result: "no such orderId and userId combination" })
	}
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
