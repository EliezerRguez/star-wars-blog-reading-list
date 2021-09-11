import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardCharacter from "./CardCharacter.js";

const CarouselCardCharacter = ({ people }) => {
	return (
		<div className="carouselCards">
			{people.map(person => {
				console.log(person);
				return <CardCharacter key={person.uid} person={person} />;
			})}
		</div>
	);
};

CarouselCardCharacter.propTypes = {
	people: PropTypes.array
};

export default CarouselCardCharacter;
