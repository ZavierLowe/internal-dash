import "./App.css";


import useSWR from "swr";
import axios from "axios";
import AccountBanner from "./components/full/account/AccountBanner";
import GasUsed from "./pages/GasInfo/GasUsed"





	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {




	const { data, error, isLoading } = useSWR(
		"http://localhost:3001/customers/1",
		fetcher,
	);

	if (error) return "an error has occured";

	if (isLoading) return "Loading...";



  console.log(data);
  

	return (
		<>
		<AccountBanner data={data}/>
		<GasUsed/>
			
		</>
	);
}

export default App;
