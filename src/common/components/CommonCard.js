import React from "react"
import { Card } from "react-bootstrap"

export default function CommonCard({ header, children }) {
	return (
		<Card className="card bg-dark text-white">
			<Card.Header>{header}</Card.Header>
			<Card.Body>{children}</Card.Body>
		</Card>
	)
}
