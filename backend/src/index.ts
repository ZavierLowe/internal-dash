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
	partSuppiled:string;
	social: number;
	phone: string;
	currentBalance: number;
	pastBalance: number;
	totalBalance: number;
	dateOfBirth: string;
	emailAddress:string;
	esco:boolean;
	consent:boolean;


}

interface customerRunningBalance {
	customerId: number;
	amount: number;
	datePosted: string;
	description: string;
	
}


const transacitons: customerRunningBalance[] = [
	{
		customerId: 1,
		amount: 200,
		description: "Gas Paid",
		datePosted: "2024-02-01",
	},
	{
		customerId: 1,
		amount: -50,
		description: "Gas Credit",
		datePosted: "2024-02-02",
	},
	{
		customerId: 2,
		amount: 150,
		description: "Online Course",
		datePosted: "2024-02-03",
	},
	{
		customerId: 3,
		amount: -75,
		description: "Restaurant",
		datePosted: "2024-02-04",
	},
	{
		customerId: 3,
		amount: 25,
		description: "Book Purchase",
		datePosted: "2024-02-05",
	},
];




const customerData: Customers[] = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		address: "123 Main St, Anytown, AN",
		partSuppiled:"2E",
		social: 123456789,
		phone: "555-1234",
		currentBalance: 1200.5,
		pastBalance: 600.25,
		totalBalance: 1800.75,
		emailAddress:"john@johnsmith.com",
		esco:true,
		consent:true,
		dateOfBirth: "1980-01-01",
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Smith",
		address: "456 Elm St, Othertown, OT",
		partSuppiled:"2W",
		social: 987654321,
		phone: "555-5678",
		currentBalance: 2400.0,
		pastBalance: 800.0,
		totalBalance: 3200.0,
		dateOfBirth: "1990-05-15",
		emailAddress:"jane@jane.com",
		esco:true,
		consent:false
	},
	{
		id: 3,
		firstName: "Alice",
		lastName: "Johnson",
		address: "789 Pine St, Sometown, ST",
		partSuppiled:"PH",
		social: 123123123,
		phone: "555-9101",
		currentBalance: 300.75,
		pastBalance: 150.0,
		totalBalance: 450.75,
		dateOfBirth: "1985-07-30",
		emailAddress:"alice@alice.com",
		esco:true,
		consent:true
	},
];

app.get("/ ", (req, res) => {
	res.send("Hello Word!");
});

app.get("/customers", (req, res) => {
	req.headers;
	res.json(customerData);
});

app.get("/customers/:id/transactions", (req,res) =>{

	const customerId = parseInt(req.params.id);
	const customerTransactions = transacitons.filter((transacton) => transacton.customerId === customerId);

	if (!customerTransactions.length ) {
		return res.status(404).send("Customer not found");
	}

	res.json(customerTransactions);
}) 

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
