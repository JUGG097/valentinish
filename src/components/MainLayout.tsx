import React from "react";
import { Outlet } from "react-router-dom";
import AnimatedHearts from "./AnimatedHearts";

const MainLayout: React.FC = () => {
	return (
		<div className="min-h-screen relative">
			<AnimatedHearts />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
