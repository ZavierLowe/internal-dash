import React from 'react'
import SideBar from '../../components/Sidebar/SideBar'
import { Card } from '@tremor/react';
import Chart from '../../components/ui/Chart'
import  { DonutChartHero } from '../../components/ui/DonutChart'
import { Icon } from "@tremor/react";
import { RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiMoneyDollarCircleFill, RiWallet2Fill, RiWallet3Fill } from '@remixicon/react';

const MainDashboardPage = () => {
  return (
		<div className="flex justify-between">
			<SideBar />
			<div className="w-4/5">
				<section className="container mx-auto p-12">
					<div className="w-96">
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
							<input
								type="text"
								name="price"
								id="price"
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
								placeholder="Search For"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<label htmlFor="currency" className="sr-only">
									Currency
								</label>
							</div>
						</div>
					</div>
					<h1 className="my-8 text-4xl font-medium text-blue-900">
						Good Afternoon, Eric
					</h1>

					<div className="my-12  grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
						<Card className="bg-white " decoration="left" decorationColor="cyan">
							<div className='flex items-center'>
								
							<Icon size='sm' icon={RiMoneyDollarCircleFill} />
							<h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
								Sales
							</h4>
							</div>
							<p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								$71,465
							</p>
						</Card>
						<Card className="bg-white " decoration="left" decorationColor="cyan">
							<div className='flex items-center'>
								
							<Icon size='sm' icon={RiWallet3Fill} />
							<h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
								Revenue
							</h4>
							</div>
							<p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								$54,465
							</p>
						</Card>
						<Card className="bg-white " decoration="left" decorationColor="cyan">
							<div className='flex items-center'>
								
							<Icon size='sm' icon={RiMoneyDollarCircleFill} />
							<h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
								Orders
							</h4>
							</div>
							<p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
								23,465
							</p>
						</Card>
						
					</div>
					<div className="w-full ">
						
							<Card className="">
								<Chart></Chart>
							</Card>
						
					</div>
					<Card className='mt-12'> 
						<h4 className='text-tremor-metric font-semibold'> Sales by Location</h4>
					<DonutChartHero></DonutChartHero>
					</Card>
				</section>
			</div>
		</div>
	);
}

export default MainDashboardPage
