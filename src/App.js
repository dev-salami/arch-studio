import React, { lazy, Suspense } from "react";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Loader from "./component/Loader";
import Navbar from "./component/Navbar";
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Navbar />
					<Routes>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path="/portfolio"
							element={<Portfolio />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
						<Route
							path="*"
							element={<Error />}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
