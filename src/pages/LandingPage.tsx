import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard";

const LandingPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="flex h-screen flex-col items-center transition-colors duration-500">
			<div className="m-auto w-full max-w-2xl px-4">
				<GlassCard className="mx-auto w-full max-w-md">
					<p className="p-2 text-center header-text text-4xl md:text-6xl font-display leading-tight">
						Good Day,{" "}
						<span className="text-[#e11d48] italic font-cursive">
							Cece!
						</span>{" "}
						💖
					</p>

					<p className="text-lg md:text-xl text-center text-rose-700/80 font-light tracking-wide max-w-md mx-auto px-1">
						Ade has a very special question for you... 🫣
					</p>

					<div className="flex justify-center">
						<button
							className="group relative flex items-center gap-3 px-10 py-3 bg-[#e11d48] hover:bg-[#9f1239] text-white reveal-btn-glow transform transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse rounded-2xl"
							style={{ borderRadius: "16px" }}
							onClick={() => navigate("/question")}
						>
							<span className="text-xl font-medium tracking-wide">
								Reveal the Surprise
							</span>
							<span className="transition-transform group-hover:translate-x-1">
								<span className="text-xl">💖</span>
							</span>
							<div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
						</button>
					</div>
				</GlassCard>
			</div>

			<p className="mt-12 text-sm text-rose-400/60 dark:text-rose-600/60 uppercase tracking-[0.2em]">
				Made with love just for you
			</p>
		</div>
	);
};

export default LandingPage;
