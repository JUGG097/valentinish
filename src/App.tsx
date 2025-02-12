import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { APP_NAME } from "./utils/Config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successNotification } from "./utils/Helpers";



function App() {
	return (
		<>
			<GlobalStyle />
			<h1 className="text-cyan-600 p-5 text-center">
				Welcome to {APP_NAME}
			</h1>
			<div className="text-center">
				<button
					className="px-4 py-2 bg-sky-600 text-white"
					onClick={() => successNotification("Howdy Mate!")}
				>
					Pop Up Toast
				</button>
			</div>

			<ToastContainer autoClose={1000} theme="dark" />
		</>
	);
}

export default App;
