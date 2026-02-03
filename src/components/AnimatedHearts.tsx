import React from "react";
import styles from "./AnimatedHearts.module.css";

type AnimatedHeartsProps = {
	className?: string;
};

const AnimatedHearts: React.FC<AnimatedHeartsProps> = ({ className }) => (
	<div
		className={`fixed inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
	>
		<div
			className={`${styles.heartBg} top-[10%] left-[15%] ${styles.animateFloat}`}
			style={{ animationDelay: "0s" }}
		>
			<div
				className={`w-24 h-24 ${styles.glass} rounded-full flex items-center justify-center text-primary text-4xl opacity-60`}
			>
				❤️
			</div>
		</div>

		<div
			className={`${styles.heartBg} top-[60%] left-[10%] ${styles.animateFloat}`}
			style={{ animationDelay: "2s" }}
		>
			<div
				className={`w-32 h-32 ${styles.glass} rounded-full flex items-center justify-center text-rose-300 text-5xl opacity-40`}
			>
				💖
			</div>
		</div>

		<div
			className={`${styles.heartBg} top-[20%] right-[10%] ${styles.animateFloat}`}
			style={{ animationDelay: "4s" }}
		>
			<div
				className={`w-20 h-20 ${styles.glass} rounded-full flex items-center justify-center text-rose-400 text-3xl opacity-50`}
			>
				✨
			</div>
		</div>

		<div
			className={`${styles.heartBg} top-[70%] right-[15%] ${styles.animateFloat}`}
			style={{ animationDelay: "1s" }}
		>
			<div
				className={`w-28 h-28 ${styles.glass} rounded-full flex items-center justify-center text-primary text-4xl opacity-30`}
			>
				💕
			</div>
		</div>

		<div
			className={`absolute top-1/4 left-1/3 ${styles.animateSparkle}`}
			style={{ animationDelay: "0.5s" }}
		>
			<span className="material-icons text-rose-400 text-md">
				&#127774;
			</span>
		</div>
	</div>
);

export default AnimatedHearts;
