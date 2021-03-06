const {
	generateId,
	randomIntFromInterval,
	randomDecimalFromInterval,
	generateUserIdList,
} = require("./utils")

const userIdList = generateUserIdList(5)

function generateDummyOrderBook() {
	const orderBook = []
	const randomUserIdx = Math.floor(Math.random() * userIdList.length)
	for (let i = 0; i < 100; i++) {
		orderBook.push({
			orderId: generateId(),
			price: randomDecimalFromInterval(0.5, 2),
			amount: randomIntFromInterval(1000, 40000),
			userId: userIdList[randomUserIdx],
		})
	}
	console.log(orderBook)
}
generateDummyOrderBook()

module.exports = {
	orderBook: [{}],
}
