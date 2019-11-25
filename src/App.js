import React, { lazy, Suspense } from "react";
import { Navigation } from "../src/components/comon/NavBar";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Spinner from "./components/comon/CenterSpiner";
const Home = lazy(() => import("./components/comon/Home"));
const MatchPic = lazy(() => import("./components/matchPic/Game"));
const Puzzle15 = lazy(() => import("./components/15Puzzle/Puzzle15"));
const Snake = lazy(() => import("./components/snake/Snake"));

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/snake">
							<Snake />
						</Route>
						<Route path="/match-the-picture">
							<MatchPic />
						</Route>
						<Route path="/puzzle-15">
							<Puzzle15 />
						</Route>
					</Switch>
				</Suspense>
			</Router>
		</>
	);
}

export default App;
