class ServerApi {
	constructor() {
		this.SERVER_ENDPOINT =
			process.env.SERVER_ENDPOINT || "http://localhost:3001"
	}

	fetchOrderbook = () => {
		return fetch(`${this.SERVER_ENDPOINT}/getOrderbook`, {
			method: "GET",
		})
	}
}

export default ServerApi
