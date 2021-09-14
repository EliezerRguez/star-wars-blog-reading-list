import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PagePlanet = () => {
	const params = useParams();
	const [planet, setPlanet] = useState([]);

	console.log(params);

	async function getPlanet() {
		const response = await fetch(`https://www.swapi.tech/api/planets/${params.id}`);

		const responseJson = await response.json();
		setPlanet(responseJson.result.properties);
	}

	useEffect(() => {
		getPlanet();
	}, []);

	return (
		<div className="container">
			<div className="row my-5">
				<div className="col-12 col-sm-6">
					<img src="https://via.placeholder.com/500x300" />
				</div>
				<div className="col-12 col-sm-6">
					<h1>{planet.name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, mauris nec malesuada
						commodo, erat ligula blandit sem, ac sagittis metus dolor vel leo. Maecenas mattis nibh vel
						tempor ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse
						potenti. Aliquam eget libero porttitor metus commodo ullamcorper id sit amet libero. Aliquam
						mollis, ligula id interdum lacinia, nulla orci consectetur quam, eget porttitor neque nisi et
						magna. Etiam sed suscipit urna, id viverra risus. Sed blandit id magna dignissim bibendum.
						Praesent sit amet ultricies neque, sed commodo lorem.
					</p>
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

export default PagePlanet;
