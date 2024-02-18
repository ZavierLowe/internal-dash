import React from 'react'
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";


const AccountBanner = ({data}:any) => {
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
						<p className="font-bold ">
							{data.firstName} <span>{data.lastName}</span>
						</p>
						<p className="mt-2">{data.address}</p>
						<p className="mt-2"> PH </p>
					</CardContent>
					<CardContent className="text-left">
						<p>01348/6723 7+</p>
						<p className="mt-2">Mtr: 20245789693</p>
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
							Current Balance: <span>${data.currentBalance}</span>{" "}
						</p>
						<p className="mt-2">
							{" "}
							Past Balance: <span>${data.pastBalance}</span>
						</p>
						<p className="mt-2">
							Total Balance: <span>${data.totalBalance}</span>
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
			</Card>
		</>
	);
}

export default AccountBanner
