import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-item-button-Warning " title={" Favorite " + store.favorites.length}>
					{store.favorites.length > 0 ? (
						store.favorites.map((fav, index) => {
							return (
								<Dropdown.Item key={index}>
									<p>{fav}</p>
									<i
										className="far fa-trash-alt"
										onClick={() => {
											actions.deleteFavorite(fav);
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
	);
};
