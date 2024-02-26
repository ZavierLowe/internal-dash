import { DonutChart, Legend } from "@tremor/react";

const sales = [
	{
		name: "New York",
		sales: 13980,
	},
	{
		name: "Dallas",
		sales: 7586,
	},
	{
		name: "Miami",
		sales: 12030,
	},
	{
		name: "San Francisco",
		sales: 14570,
	},
	{
		name: "Kansas City",
		sales: 23299,
	},
];

const valueFormatter = (number: number) =>
	`$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function DonutChartHero() {
	return (
		<>
			<div className="flex items-center justify-center space-x-6">
				<DonutChart
					data={sales}
					category="sales"
					index="name"
					valueFormatter={valueFormatter}
					colors={["blue", "cyan", "indigo", "violet", "red"]}
					className="w-40"
				/>
				<Legend
					categories={[
						"New York",
						"Dallas",
						"Miami",
						"San Francisco",
						"Kansas City",
					]}
					colors={["blue", "cyan", "indigo", "violet", "red"]}
					className="max-w-xs"
				/>
			</div>
		</>
	);
}

export default DonutChartHero;
