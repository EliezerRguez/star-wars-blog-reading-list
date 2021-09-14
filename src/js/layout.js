import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import PageCharacter from "./component/PageCharacter";
import PagePlanet from "./component/PagePlanet";
import PageVehicles from "./component/PageVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/people/:id">
						<PageCharacter />
					</Route>
					<Route exact path="/planet/:id">
						<PagePlanet />
					</Route>
					<Route exact path="/starships/:id">
						<PageVehicles />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
