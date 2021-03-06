class ServerApi {
	constructor() {
		this.SERVER_ENDPOINT =
			process.env.SERVER_ENDPOINT || "http://localhost:3001"
		this.headers = {
			Accept: "application/json",
			"Content-Type": "application/json",
		}
	}

	fetchOrderbook = () => {
		return fetch(`${this.SERVER_ENDPOINT}/getOrderbook`, {
			method: "GET",
		})
	}

	fetchOrdersForUser = (userId) => {
		return fetch(`${this.SERVER_ENDPOINT}/getOrdersForUser/${userId}`, {
			method: "GET",
		})
	}

	placeOrder = (data) => {
		return fetch(`${this.SERVER_ENDPOINT}/placeOrder`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: this.headers,
		})
	}

	cancelOrder = (data) => {
		return fetch(`${this.SERVER_ENDPOINT}/cancelOrder`, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: this.headers,
		})
	}
}

export default ServerApi
