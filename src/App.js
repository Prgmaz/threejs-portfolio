
import "./App.scss";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Home />
				<Info />
				<Projects />
				<Contact />
			</Suspense>
		</>
	);
}

export default App;
