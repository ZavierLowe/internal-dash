import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { LineChart } from "@tremor/react";




//This is the gas consumption for a user selected on a route


// Dummy Chart Data
const chartdata = [
	{
		date: "Jan 22",
		SemiAnalysis: 2890,
		"The Pragmatic Engineer": 2338,
	},
	{
		date: "Feb 22",
		SemiAnalysis: 2756,
		"The Pragmatic Engineer": 2103,
	},
	{
		date: "Mar 22",
		SemiAnalysis: 3322,
		"The Pragmatic Engineer": 2194,
	},
	{
		date: "Apr 22",
		SemiAnalysis: 3470,
		"The Pragmatic Engineer": 2108,
	},
	{
		date: "May 22",
		SemiAnalysis: 3475,
		"The Pragmatic Engineer": 1812,
	},
	{
		date: "Jun 22",
		SemiAnalysis: 3129,
		"The Pragmatic Engineer": 1726,
	},
	{
		date: "Jul 22",
		SemiAnalysis: 3490,
		"The Pragmatic Engineer": 1982,
	},
	{
		date: "Aug 22",
		SemiAnalysis: 2903,
		"The Pragmatic Engineer": 2012,
	},
	{
		date: "Sep 22",
		SemiAnalysis: 2643,
		"The Pragmatic Engineer": 2342,
	},
	{
		date: "Oct 22",
		SemiAnalysis: 2837,
		"The Pragmatic Engineer": 2473,
	},
	{
		date: "Nov 22",
		SemiAnalysis: 2954,
		"The Pragmatic Engineer": 3848,
	},
	{
		date: "Dec 22",
		SemiAnalysis: 3239,
		"The Pragmatic Engineer": 3736,
	},
];
const valueFormatter = function (number:number) {
	return "$ " + new Intl.NumberFormat("us").format(number).toString();
};



const gasConsumption = () => {
  return (
		<>
			<div className="mt-10">
				<Card>
					<CardHeader>
						<CardTitle className="text-left text-3xl font-bold text-blue-600">
							Gas Consumption
						</CardTitle>
						<CardDescription className="text-left text-sm  text-blue-400">
							Gas Billing History
						</CardDescription>
					</CardHeader>
					<CardContent> </CardContent>

					<div>Usage by Month in CCF</div>
					<div>Cost by month</div>
					<div>Comparason with ESCO</div>
				</Card>
			</div>
			<LineChart
				className="mt-4 h-96"
				data={chartdata}
				index="date"
				yAxisWidth={65}
				categories={["SemiAnalysis", "The Pragmatic Engineer"]}
				colors={["blue-600", "red-500"]}
				valueFormatter={valueFormatter}
			/>
		</>
	);
}

export default gasConsumption
