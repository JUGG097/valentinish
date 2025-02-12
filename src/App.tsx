import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successNotification, errorNotification } from "./utils/Helpers";

function App() {
	const [showQuestion, setShowQuestion] = useState(false);

	return (
		<>
			<GlobalStyle />
			{showQuestion ? (
				<div className="flex h-screen">
					<div className="m-auto">
						<h1 className="px-5 text-center header-text">
							Knowing you has been much more than just a positive experience.
						</h1>
						<h1 className="px-5 pb-5 text-center header-text typed-out">
							Will you do me the honor of being my Valentine this year? 🥰 💐
							🥰 💐 🥰
						</h1>
						<div className="text-center">
							<button
								className="px-10 py-2 rounded-full"
								onClick={() =>
									successNotification(
										"Thank You! 🥳 🕺 Ade is very happy 🥳 🕺"
									)
								}
							>
								Yes ☺️
							</button>

							<button
								className="px-10 py-2 rounded-full ml-4"
								onClick={() =>
									errorNotification("Abeg now! 🙏 🥺")
								}
							>
								No 😔
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex h-screen flex-col items-center">
					<div className="m-auto flex flex-col items-center">
						<p className="p-2 text-center header-text">
							Good Day, Cece! 💖
						</p>
						<p className="text-center">Ade has a question for you 🫣</p>
						<button
							className="px-10 py-3 rounded-full justify-center items-center mt-3"
							onClick={() => setShowQuestion(true)}
						>
							View Question 👀
						</button>
					</div>
				</div>
			)}

			<ToastContainer autoClose={1000} theme="dark" />
		</>
	);
}

export default App;
