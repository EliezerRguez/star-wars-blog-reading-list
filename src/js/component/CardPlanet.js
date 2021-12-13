import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanet = ({ planet }) => {
	const { store, actions } = useContext(Context);
	const [planets, setPlanets] = useState({});

	async function getElement() {
		const response = await fetch(`${planet.url}`);

		const responseJson = await response.json();
		setPlanets(responseJson.result.properties);
	}

	function handleOnClick() {
		let title = planet.name;
		if (store.favorites.findIndex(fav => fav.name == title) === -1) {
			actions.addFavorite(title);
		}
	}

	useEffect(() => {
		getElement();
	}, []);

	return (
		<div className="col-4" key={planet.uid}>
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{planet.name}</h5>
					<p className="card-text">Population: {planets.population}</p>
					<p className="card-text">Terrain: {planets.terrain}</p>

					<Link to={`/planets/${planets.uid}`}>
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

CardPlanet.propTypes = {
	planet: PropTypes.object
};

export default CardPlanet;
