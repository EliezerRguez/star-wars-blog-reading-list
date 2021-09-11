import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardPlanet from "../component/CardPlanet.js";

const CarouselCardPlanet = ({ planets }) => {
	return (
		<div className="carouselCards">
			{planets.map(planet => {
				console.log(planet);
				return <CardPlanet key={planet.uid} planet={planet} />;
			})}
		</div>
	);
};

CarouselCardPlanet.propTypes = {
	planets: PropTypes.array
};

export default CarouselCardPlanet;
