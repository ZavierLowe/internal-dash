import React from 'react'
import Button from '../../components/ui/Button';

const AccountInquiry = () => {
  return (
		<div className="mx-auto container mt-2">
			<div className="p-8 border border-black shadow-md">
				<h1 className="text-2xl font-bold text-blue-800">Account Banner</h1>
				<div className="grid grid-cols-4 mt-8">
					<div className="flex flex-col space-y-4">
						<div>First and Last Name</div>
						<div>222 Pacific St. 4E</div>
						<div></div>
						<div>Brooklyn, NY 11225-00000</div>
					</div>
					<div className="flex flex-col space-y-4">
						<div>
							Current Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Past Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Total Balance: <span>$2,000</span>{" "}
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<div>
							Current Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Past Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Total Balance: <span>$2,000</span>{" "}
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<div>
							Current Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Past Balance: <span>$1,000</span>{" "}
						</div>
						<div>
							Total Balance: <span>$2,000</span>{" "}
						</div>
					</div>
				</div>
                <Button variant='secondary' size='lg'>Red</Button>
			</div>
		</div>
	);
}

export default AccountInquiry
