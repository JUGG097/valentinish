import React from "react";
import styles from "./GlassCard.module.css";

type GlassCardProps = {
	className?: string;
	children: React.ReactNode;
};

const GlassCard: React.FC<GlassCardProps> = ({ className, children }) => (
	<div className={`${styles.card} ${className ?? ""}`}>
		<div className={styles.content}>{children}</div>
	</div>
);

export default GlassCard;
