import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicle = ({ ship }) => {
	const { store, actions } = useContext(Context);
	const [vehicle, setVehicle] = useState({});

	async function getElement() {
		const response = await fetch(`${ship.url}`);

		const responseJson = await response.json();
		setVehicle(responseJson.result.properties);
	}

	function handleOnClick() {
		let title = ship.name;
		if (store.favorites.findIndex(fav => fav.name == title) === -1) {
			actions.addFavorite(title);
		}
	}

	useEffect(() => {
		getElement();
	}, []);

	return (
		<div className="col-4" key={ship.uid}>
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{ship.name}</h5>
					<p className="card-text">Class: {vehicle.starship_class}</p>
					<p className="card-text">Hyperdrive Rating: {vehicle.hyperdrive_rating}</p>

					<Link to={`/starships/${ship.uid}`}>
						<button className="btn text-primary border-primary d-inline-block">Learn more!</button>
					</Link>
					<a href="#" onClick={handleOnClick} className="btn text-warning border-warning ml-4 d-inline-block">
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
