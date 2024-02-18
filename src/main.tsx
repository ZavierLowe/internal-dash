import React from "react";
import App from "./App.tsx";
import "./index.css";
import GasUsed from "./pages/GasInfo/GasUsed.tsx";
import AccountBalance from "./pages/AccountBalance.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/gas-used",
		element: <GasUsed />,
		errorElement: <div>404 Not Found</div>,
	},
	{
		path: "/running-balance",
		element: <AccountBalance />,
		errorElement: <div>404 Not Found</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
