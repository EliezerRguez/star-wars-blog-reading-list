import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardVehicle = ({ ship }) => {
	const [vehicle, setVehicle] = useState({});

	async function getElement() {
		const response = await fetch(`${ship.url}`);

		const responseJson = await response.json();
		setVehicle(responseJson.result.properties);
	}

	useEffect(() => {
		getElement();
	}, []);

	return (
		<div className="col-4" key={ship.uid}>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{ship.name}</h5>
					<p className="card-text">Class: {vehicle.starship_class}</p>
					<p className="card-text">Hyperdrive Rating: {vehicle.hyperdrive_rating}</p>

					<a href="#" className="btn text-primary border-primary d-inline-block">
						Learn more!
					</a>
					<a href="#" className="btn text-warning border-warning ml-4 d-inline-block">
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

CardVehicle.propTypes = {
	ship: PropTypes.object
};

export default CardVehicle;
