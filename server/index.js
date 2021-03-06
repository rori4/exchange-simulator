const express = require("express")
const port = process.env.PORT || 3000
const app = express()


app.listen(port, () =>
	console.log(`REST server is listening on http://localhost:${port}/`)
)
