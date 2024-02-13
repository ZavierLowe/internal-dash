import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "@/components/ui/card"

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";


function App() {

  const invoices = [
		{
			date: "02/12/2024",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
			paymentMethod: "Credit Card",
		},
		{
			date: "01/12/2024",
			paymentStatus: "Pending",
			totalAmount: "$150.00",
			paymentMethod: "PayPal",
		},
		{
			date: "12/12/2023",
			paymentStatus: "Unpaid",
			totalAmount: "$350.00",
			paymentMethod: "Bank Transfer",
		},
		{
			date: "11/12/2023",
			paymentStatus: "Paid",
			totalAmount: "$450.00",
			paymentMethod: "Credit Card",
		},
		{
			date: "10/12/2023",
			paymentStatus: "Paid",
			totalAmount: "$550.00",
			paymentMethod: "PayPal",
		},
		{
			date: "09/12/2023",
			paymentStatus: "Pending",
			totalAmount: "$200.00",
			paymentMethod: "Bank Transfer",
		},
		{
			date: "08/12/2023",
			paymentStatus: "Unpaid",
			totalAmount: "$300.00",
			paymentMethod: "Credit Card",
		},
	];
  

  return (
		<>
			<Card className="w-full  ">
				<div className="flex flex-row w-full">
					<CardHeader className="">
						<CardTitle className="text-2xl">Account Banner </CardTitle>
						<CardDescription className="text-left">
							{" "}
							Customer Info
						</CardDescription>
					</CardHeader>
				</div>
				<div className="flex grid-cols-4 gap-20">
					<CardContent className="text-left ">
						<p className="font-bold ">Janet Jackson</p>
						<p className="mt-2">7979 Beverley Hills Ave.</p>
						<p className="mt-2"> PH </p>
					</CardContent>
					<CardContent className="text-left">
						<p>01348/6723 7+</p>
						<p className="mt-2">Mtr: 0245789693</p>
						<p className="mt-2">Rate: 1B</p>
					</CardContent>

					<CardContent className="text-left">
						<p>
							Special Conditions: <span>DPA</span>{" "}
						</p>
						<p className="mt-2">
							{" "}
							Payperless: <span>Yes</span>
						</p>
						<p className="mt-2">
							SA: <span>0161</span>
						</p>
					</CardContent>
					<CardContent className="text-left">
						<p>
							Current Balance: <span>$50,000.00</span>{" "}
						</p>
						<p className="mt-2">
							{" "}
							Past Balance: <span>$50,000.00</span>
						</p>
						<p className="mt-2">
							Total Balance: <span>$100,000.00</span>
						</p>
					</CardContent>
				</div>

				<CardFooter className="grid grid-cols-5 gap-5 mt-10">
					<Button variant="secondary">View Pending Tasks</Button>
					<Button variant="secondary">Make a Payment</Button>
					<Button variant="secondary">View Running Balance</Button>
					<Button variant="secondary">Update Information</Button>
					<Button variant="secondary">Create a Note</Button>
				</CardFooter>

				<div className="p-6">
					<Table>
						<TableCaption>A list of customer's running balance</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="">Date</TableHead>
								<TableHead className="text-center">Payment Desc</TableHead>
								<TableHead className="text-center">Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
              {invoices.map ((invoice) =>(


							<TableRow key={invoice.invoice}> 
								<TableCell className="font-medium text-left">{invoice.date}</TableCell>
								<TableCell>{invoice.paymentStatus}</TableCell>
								<TableCell>{invoice.paymentMethod}</TableCell>
								<TableCell className="text-right">{invoice.totalAmount}</TableCell>
							</TableRow>
              ))}
						</TableBody>
					</Table>
				</div>
			</Card>
		</>
	);
}

export default App
