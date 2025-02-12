import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { APP_NAME } from "./utils/Config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successNotification, errorNotification } from "./utils/Helpers";



function App() {
	return (
		<>
			<GlobalStyle />
			<div className="flex h-screen">
				<div className="m-auto">
					<h1 className="p-5 text-center header-text">
					Knowing you has been a positive experience, will you do me the honor of being my Valentine this year? 🥰 🥰 🥰 
					</h1>
					<div className="text-center">
						<button
							className="px-10 py-2 rounded-full"
							onClick={() => successNotification("Thank You! 🥳 🕺 Ade is very happy 🥳 🕺")}
						>
							Yes ☺️
						</button>
						
						<button
							className="px-10 py-2 rounded-full ml-4"
							onClick={() => errorNotification("Abeg now! 🙏 🥺")}
						>
							No 😔
						</button>
					</div>
				</div>
			</div>

			<ToastContainer autoClose={1000} theme="dark" />
		</>
	);
}

export default App;
