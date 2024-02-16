import express from "express";
import cors from "cors";

const app = express();

app.use(
	cors(),
);

const PORT = process.env.PORT || 3001;

interface Customers {
	id: number;
	firstName: string;
	lastName: string;
	address: string;
	social: number;
	phone: string;
	currentBalance: number;
	pastBalance: number;
	totalBalance: number;
	dateOfBirth: string;
}

const customerData: Customers[] = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		address: "123 Main St, Anytown, AN",
		social: 123456789,
		phone: "555-1234",
		currentBalance: 1200.5,
		pastBalance: 600.25,
		totalBalance: 1800.75,
		dateOfBirth: "1980-01-01",
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Smith",
		address: "456 Elm St, Othertown, OT",
		social: 987654321,
		phone: "555-5678",
		currentBalance: 2400.0,
		pastBalance: 800.0,
		totalBalance: 3200.0,
		dateOfBirth: "1990-05-15",
	},
	{
		id: 3,
		firstName: "Alice",
		lastName: "Johnson",
		address: "789 Pine St, Sometown, ST",
		social: 123123123,
		phone: "555-9101",
		currentBalance: 300.75,
		pastBalance: 150.0,
		totalBalance: 450.75,
		dateOfBirth: "1985-07-30",
	},
];

app.get("/ ", (req, res) => {
	res.send("Hello Word!");
});

app.get("/customers", (req, res) => {
	req.headers;
	res.json(customerData);
});

app.get("/customers/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const customer = customerData.find((customer) => customer.id === id);

	if (!customer) {
		return res.status(404).send("Customer not found");
	}

	res.json(customer);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
