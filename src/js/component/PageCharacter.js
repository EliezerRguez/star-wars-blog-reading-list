import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PageCharacter = () => {
	const params = useParams();
	const [person, setPerson] = useState([]);

	console.log(params);

	async function getPerson() {
		const response = await fetch(`https://www.swapi.tech/api/people/${params.id}`);

		const responseJson = await response.json();
		setPerson(responseJson.result.properties);
	}

	useEffect(() => {
		getPerson();
	}, []);

	return (
		<div className="container">
			<div className="row my-5">
				<div className="col-12 col-sm-6">
					<img src="https://via.placeholder.com/500x300" />
				</div>
				<div className="col-12 col-sm-6">
					<h1>{person.name}</h1>
					<p>Lorem Ipsum</p>
				</div>
			</div>
			<div className="row text-center border-top border-danger pt-3">
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Name:</p>
					<span>{person.name}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Birth Year: </p>
					<span>{person.birth_year}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Gender: </p>
					<span>{person.gender}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Height: </p>
					<span>{person.height}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Skin Color: </p>
					<span>{person.skin_color}</span>
				</div>
				<div className="col-2 text-danger">
					<p classNmae="mb-2 font-weight-bold">Eye Color: </p>
					<span>{person.eye_color}</span>
				</div>
			</div>
		</div>
	);
};

export default PageCharacter;
