import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardVehicles from "./CardVehicles.js";

const CarouselCardVehicle = ({ vehicles }) => {
	return (
		<div className="carouselCards">
			{vehicles.map(ship => {
				console.log(ship);
				return <CardVehicles key={ship.uid} ship={ship} />;
			})}
		</div>
	);
};

CarouselCardVehicle.propTypes = {
	vehicles: PropTypes.array
};

export default CarouselCardVehicle;
