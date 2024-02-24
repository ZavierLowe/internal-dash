import React from 'react'
import SideBar from '../../components/Sidebar/SideBar'

const MainDashboardPage = () => {
  return (
		<div className="flex justify-between">
			<SideBar />
			<div className="w-4/5">
                <section className='container mx-auto p-12'>
                    
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
					<div className="h-32 rounded-lg bg-gray-200"></div>
					<div className="h-32 rounded-lg bg-gray-200"></div>
					<div className="h-32 rounded-lg bg-gray-200"></div>
					<div className="h-32 rounded-lg bg-gray-200"></div>
				</div>
                </section>
				Main Dashboard
			</div>
		</div>
	);
}

export default MainDashboardPage
