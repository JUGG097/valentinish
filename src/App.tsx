import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import MainLayout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuestionPage from "./pages/QuestionPage";
import LandingPage from "./pages/LandingPage";
import CelebrationPage from "./pages/CelebrationPage";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<LandingPage />} />
					<Route path="question" element={<QuestionPage />} />{" "}
					<Route path="yay" element={<CelebrationPage />} />{" "}
					<Route path="*" element={<LandingPage />} />
				</Route>
			</Routes>

			<ToastContainer autoClose={1000} theme="dark" />
		</BrowserRouter>
	);
}

export default App;
