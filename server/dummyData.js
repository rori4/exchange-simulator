const {
	generateId,
	randomIntFromInterval,
	randomDecimalFromInterval,
	generateUserIdList,
} = require("./utils")
const { ORDER_STATUS } = require("./constants")

const userIdList = generateUserIdList(5)
function generateDummyOrderBook() {
	const orderBook = []
	const randomUserIdx = Math.floor(Math.random() * userIdList.length)
	for (let i = 0; i < 100; i++) {
		const price = Number(randomDecimalFromInterval(0.5, 2).toFixed(6))
		orderBook.push({
			orderId: generateId(),
			price: price,
			amount: randomIntFromInterval(1000, 40000),
			side: price < 1.4 ? "BID" : "ASK",
			userId: userIdList[randomUserIdx],
			status: ORDER_STATUS.PENDING,
		})
	}
	// console.log(orderBook)
	return orderBook
}

module.exports = {
	dummyOrderBook: generateDummyOrderBook(),
}
