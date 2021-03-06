import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="bg-light">
			<nav className="navbar navbar-light bg-light mb-3 container ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STAR WARS</span>
				</Link>
				<div className="ml-auto">
					<DropdownButton id="dropdown-item-button-Warning " title={" Favorite " + store.favorites.length}>
						{store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => {
								return (
									<Dropdown.Item key={index}>
										<p>{fav.name}</p>
										<i
											className="far fa-trash-alt"
											onClick={() => {
												actions.deleteFavorite(fav.name);
											}}
										/>
									</Dropdown.Item>
								);
							})
						) : (
							<Dropdown.Item>Empty</Dropdown.Item>
						)}
					</DropdownButton>
				</div>
			</nav>
		</div>
	);
};
