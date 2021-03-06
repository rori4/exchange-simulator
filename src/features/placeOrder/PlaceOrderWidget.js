import React, { useState } from "react"
import CommonCard from "common/components/CommonCard"
import { Form, Button, Row, Col } from "react-bootstrap"
import { placeOrder } from "features/placeOrder/placeOrderSlice"
import { selectUserId } from "features/userWidget/userSlice"
import { useDispatch, useSelector } from "react-redux"

export default function PlaceOrderWidget() {
	const dispatch = useDispatch()
	const [price, setPrice] = useState(null)
	const [amount, setAmount] = useState(null)
	const userId = useSelector(selectUserId)

	const handleSubmit = ({ side }) => {
		dispatch(
			placeOrder({ price: Number(price), amount: Number(amount), side, userId })
		)
	}

	return (
		<CommonCard header="Place Order">
			{userId ? (
				<>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="number"
								placeholder="Price"
								onChange={(ev) => setPrice(ev.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Control
								type="number"
								placeholder="Amount"
								onChange={(ev) => setAmount(ev.target.value)}
							/>
						</Form.Group>
					</Form>
					<Row>
						<Col>
							<Button
								variant="success"
								type="submit"
								size="lg"
								block
								onClick={() => handleSubmit({ side: "ASK" })}
							>
								Buy
							</Button>
						</Col>
						<Col>
							<Button
								variant="danger"
								type="submit"
								size="lg"
								block
								onClick={() => handleSubmit({ side: "BID" })}
							>
								Sell
							</Button>
						</Col>
					</Row>
				</>
			) : (
				"Please, set user id first in order to place orders!"
			)}
		</CommonCard>
	)
}
