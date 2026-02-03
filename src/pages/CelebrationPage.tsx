import React from "react";
import { useNavigate } from "react-router-dom";

const pics = [
	"https://res.cloudinary.com/dcym0jsal/image/upload/v1770154538/Val-3_dnvpku.jpg",
	"https://res.cloudinary.com/dcym0jsal/image/upload/v1770154538/Val-1_lmdnxm.jpg",
	"https://res.cloudinary.com/dcym0jsal/image/upload/v1770154538/Val-2_udanve.jpg",
];

const CelebrationPage: React.FC = () => {
	const navigate = useNavigate();

	// Randomized tilt values generated on mount (keeps layout stable during the session)
	const [tiltsArr, setTiltsArr] = React.useState<number[]>([]);
	React.useEffect(() => {
		const choices = [-8, -6, -4, -2, 0, 2, 4, 6, 8];
		const generated = pics.map(
			() => choices[Math.floor(Math.random() * choices.length)],
		);
		setTiltsArr(generated);
	}, []);

	return (
		<div className="flex h-screen items-center justify-center py-8">
			<div className="w-full max-w-4xl px-4">
				<div className="rounded-3xl p-8 md:p-16 shadow-2xl text-center bg-white/80 ">
					<h1
						className="text-3xl md:text-5xl font-extrabold mb-6 font-cursive"
						style={{ color: "#E3756F" }}
					>
						Yay! You made Ade the happiest person! 💖
					</h1>
					<p className="text-sm text-[#89616b] mb-6 font-semibold italic">
						"I can't wait for our special day together ❤️"
					</p>
					<p className="text-[#E3756F] mb-6 font-cursive">
						✨ Some Memories ✨
					</p>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{pics.map((src, i) => {
							const tilt = tiltsArr[i] ?? 0;
							return (
								<div
									key={i}
									className="tilt-card relative bg-white rounded-md p-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform"
									style={{ ["--tilt" as any]: `${tilt}deg` }}
								>
									<img
										src={src}
										alt={`photo-${i + 1}`}
										className="w-full h-48 object-cover rounded-sm border border-gray-100"
									/>
								</div>
							);
						})}
					</div>
					<div className="mt-6">
						<button
							onClick={() => navigate("/")}
							aria-label="Back to landing"
							className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
						>
							Back to home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CelebrationPage;
