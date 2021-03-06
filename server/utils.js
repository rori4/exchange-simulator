const crypto = require("crypto")

function generateId(bytes = 16) {
	return crypto.randomBytes(bytes).toString("hex")
}

function randomIntFromInterval(min, max) {
	return Math.floor(randomDecimalFromInterval(min, max))
}

function randomDecimalFromInterval(min, max) {
	// min and max included
	return Math.random() * (max - min + 1) + min
}

function generateUserIdList(numberOfUsers) {
	const userIdList = []
	for (let i = 0; i < numberOfUsers; i++) {
		userIdList.push(`0x${generateId(20)}`)
	}
	return userIdList
}

module.exports = {
	generateId,
	randomIntFromInterval,
	randomDecimalFromInterval,
	generateUserIdList,
}
