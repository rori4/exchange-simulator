const express = require("express")
const port = process.env.PORT || 3001
const app = express()
const orderBook = []

app.get("/getOrderbook", (req, res) => {
	res.json(orderBook)
})

app.get("/getOrdersForUser/:userId", (req, res) => {
	const { userId } = req.params
	console.log(userId)
	res.json(200)
})

app.post("/placeOrder", (req, res) => {
	res.json(200)
})

app.put("/cancelOrder", (req, res) => {
	res.json(200)
})

app.listen(port, () =>
	console.log(`REST server is listening on http://localhost:${port}/`)
)
