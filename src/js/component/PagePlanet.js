import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PageCharacter = () => {
	const params = useParams();
	const [planet, setPlanet] = useState([]);

	console.log(params);

	async function getPerson() {
		const response = await fetch(`https://www.swapi.tech/api/planets/${params.id}`);

		const responseJson = await response.json();
		setPlanet(responseJson.result.properties);
	}

	useEffect(() => {
		getPerson();
	}, []);

	return (
		<div className="container">
			<div className="row mb-4">
				<div className="col-12 col-sm-6">
					<img src="https://via.placeholder.com/500x300" />
				</div>
				<div className="col-12 col-sm-6">
					<h1>{planet.name}</h1>
					<p>Lorem Ipsum</p>
				</div>
			</div>
			<div className="row text-center border-top border-danger pt-3">
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Name:</p>
					<span>{planet.name}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Climate: </p>
					<span>{planet.climate}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Terrain: </p>
					<span>{planet.terrain}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Population: </p>
					<span>{planet.population}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Diameter </p>
					<span>{planet.diameter}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Gravity: </p>
					<span>{planet.gravity}</span>
				</div>
			</div>
		</div>
	);
};

export default PageCharacter;
