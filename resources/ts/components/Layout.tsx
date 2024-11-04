import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

type LayoutProps = {
	children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<header>
				<nav>
					<Link to="/">Home</Link> | <Link to="/about">About</Link>
				</nav>
			</header>
			<main>
				{children || <Outlet />}{" "}
				{/* Outletでネストされたコンポーネントを表示 */}
			</main>
			<footer>
				<p>© 2024 Larasand</p>
			</footer>
		</div>
	);
};
