import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/GlassCard";

const QuestionPage: React.FC = () => {
	const navigate = useNavigate();

	const [noPos, setNoPos] = React.useState({ x: 0, y: 0 });
	const [attempts, setAttempts] = React.useState(0);

	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const btnRef = React.useRef<HTMLButtonElement | null>(null);

	const moveNoButton = () => {
		const maxX = 120; // cap maximum movement for playfulness
		const maxY = 80;

		if (!containerRef.current || !btnRef.current) {
			const x = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
			const y = Math.floor(Math.random() * (maxY * 2 + 1)) - maxY;
			setNoPos({ x, y });
			setAttempts((a) => a + 1);
			return;
		}

		const containerRect = containerRef.current.getBoundingClientRect();
		const btnRect = btnRef.current.getBoundingClientRect();

		// compute allowed dx so the button stays fully inside the container
		const pad = 8; // small padding from edges
		const minDx = Math.ceil(containerRect.left - btnRect.left + pad);
		const maxDx = Math.floor(containerRect.right - btnRect.right - pad);

		const allowedMinX = Math.max(minDx, -maxX);
		const allowedMaxX = Math.min(maxDx, maxX);

		const minDy = Math.ceil(containerRect.top - btnRect.top + pad);
		const maxDy = Math.floor(containerRect.bottom - btnRect.bottom - pad);

		const allowedMinY = Math.max(minDy, -maxY);
		const allowedMaxY = Math.min(maxDy, maxY);

		const x =
			Math.floor(Math.random() * (allowedMaxX - allowedMinX + 1)) +
			allowedMinX;
		const y =
			Math.floor(Math.random() * (allowedMaxY - allowedMinY + 1)) +
			allowedMinY;

		setNoPos({ x, y });
		setAttempts((a) => a + 1);
	};

	return (
		<div className="flex h-screen items-center justify-center py-4 font-question-display">
			<div className="w-full max-w-3xl px-4">
				<GlassCard className="rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col items-center text-center gap-8">
					<div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 mx-auto flex items-center justify-center">
						<div
							className="w-full h-full bg-cover bg-center"
							role="img"
							aria-label="Romantic pink and gold abstract background"
							style={{
								backgroundImage: `url("https://res.cloudinary.com/dcym0jsal/image/upload/v1770154811/Val-4_iru8oq.jpg")`,
							}}
						></div>
					</div>
					<div className="space-y-4">
						<h1
							className="text-3xl md:text-5xl font-black text-[#181113] leading-tight"
							style={{ fontWeight: "900" }}
						>
							Cece, will you be my{" "}
							<span className="text-[#ee2b5b]">Valentine?</span>
						</h1>
						<p className="text-[#89616b] text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
							Knowing you has been a beautiful journey. Will you
							do me the honor of being my Valentine this year?
						</p>
					</div>
					<div
						ref={containerRef}
						className="flex flex-wrap items-center justify-center gap-6 w-full"
					>
						{/* <!-- Yes Button --> */}
						<button
							className="group flex min-w-45 md:min-w-60 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-16 px-8 bg-[#ee2b5b] text-white text-xl font-bold leading-normal tracking-wide shadow-[0_8px_30px_rgb(238,43,91,0.4)] hover:scale-105 transition-all"
							style={{ borderRadius: "36px" }}
							onClick={() => navigate("/yay")}
							aria-label="Yes, of course!"
						>
							<span>YES!</span>
							<span className="text-xl">🎉</span>
						</button>
						{/* <!-- No Button (Playful interaction) --> */}
						<button
							ref={btnRef}
							aria-label="No, I don't want to"
							className="no-button-dodge flex min-w-25 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white/95 dark:bg-slate-800/60 text-[#89616b] dark:text-pink-100/70 text-base font-bold leading-normal transition-all shadow-md"
							style={{
								borderRadius: "36px",
								transform: `translate(${noPos.x}px, ${noPos.y}px)`,
								transition: "transform 200ms ease",
							}}
							onMouseEnter={moveNoButton}
							onClick={(e) => {
								e.preventDefault();
								moveNoButton();
							}}
						>
							<span>No</span>
						</button>
					</div>
					<div className="flex flex-wrap justify-center gap-8 mt-4 pt-8 border-t border-primary/10 w-full">
						<p className="mt-12 text-sm text-rose-400/60 dark:text-rose-600/60 uppercase tracking-[0.2em]">
							Made with love just for you
						</p>
					</div>
					<div>
						<button
							onClick={() => navigate("/")}
							aria-label="Back to landing"
							className="mt-4 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
						>
							Back to home
						</button>
					</div>
				</GlassCard>
			</div>
		</div>
	);
};

export default QuestionPage;
