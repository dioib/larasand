import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Memo } from "./pages/detail/Memo";
import { Detail } from "./pages/detail/index";
import { Page404 } from "./pages/error/404";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />

			{/* 階層的なルーティング */}
			<Route path="/detail" element={<Layout />}>
				{/* /page1にアクセスすると、indexが指定されたコンポーネントが表示される */}
				<Route index element={<Detail />} />
				{/* /page1の相対パスを指定 */}
				<Route path="memo" element={<Memo />} />
			</Route>

			{/* エラーページ */}
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
