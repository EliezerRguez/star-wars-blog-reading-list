import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacter = ({ person }) => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({});

	async function getElement() {
		const response = await fetch(`${person.url}`);

		const responseJson = await response.json();
		setCharacter(responseJson.result.properties);
	}

	function handleOnClick() {
		let title = person.name;
		if (store.favorites.findIndex(fav => fav.name == title) === -1) {
			actions.addFavorite(title);
		}
	}

	useEffect(() => {
		getElement();
	}, []);
	console.log(store.people);
	return (
		<div className="col-4" key={person.uid}>
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{person.name}</h5>
					<p className="card-text">Gender: {character.gender}</p>
					<p className="card-text">Hair Color: {character.hair_color}</p>
					<p className="card-text">Eye-color: {character.eye_color}</p>
					<Link to={`/people/${person.uid}`}>
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

CardCharacter.propTypes = {
	person: PropTypes.object
};

export default CardCharacter;
