const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: newFavorite => {
				const store = getStore();
				let newfavorites = [...store.favorites, { name: newFavorite }];
				getActions().setFavorites(newfavorites);
			},
			deleteFavorite: favoriteName => {
				const store = getStore();
				let favorites = [...store.favorites];
				let newFavorites = favorites.filter(fav => fav.name != favoriteName);
				getActions().setFavorites(newFavorites);
			},
			setFavorites: favorites => {
				localStorage.setItem("favorites", JSON.stringify(favorites));
				setStore({ favorites: favorites });
			}
		}
	};
};

export default getState;
