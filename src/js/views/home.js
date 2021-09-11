import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import CarouselCardCharacter from "../component/CarouselCardCharacter.js";
import CarouselCardVehicle from "../component/CarouselCardVehicle.js";
import CarouselCardPlanet from "../component/CarouselCardPlanet.js";

export const Home = () => {
	const [planets, setPlanet] = useState([]);
	const [people, setPeople] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	async function getElement(element, set) {
		const response = await fetch(`https://www.swapi.tech/api/${element}`);

		const responseJson = await response.json();
		set(responseJson.results);
	}

	useEffect(() => {
		getElement("planets", setPlanet);
		getElement("people", setPeople);
		getElement("starships", setVehicles);
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-danger">Characters</h2>

			<div className="row mb-4">
				<CarouselCardCharacter people={people} />
			</div>
			<h2 className="text-danger">Planet</h2>

			<div className="row mb-4">
				<CarouselCardPlanet planets={planets} />
			</div>
			<h2 className="text-danger">Vehicles</h2>

			<div className="row mb-4">
				<CarouselCardVehicle vehicles={vehicles} />
			</div>
		</div>
	);
};
