const url = "https://api.pokemontcg.io/v1/cards";
const pokemonContainer = document.querySelector(".card-container");
const search = document.querySelector('input')

import { getPokemon } from "./API.js";
import { createCard } from "./DOM.js";



const renderCards = async () => {
  pokemonContainer.innerHTML = "";
  const allCards = await getPokemon(url);
  allCards.forEach((card) => createCard(card));
};


const filter = async (query) => {
  const allCards = await getPokemon(url);
  const filterArr = allCards.filter((card) => card.name.includes(query));
  return filterArr;
};


search.addEventListener("keyup", async () => {
  pokemonContainer.innerHTML = "";
  let query = search.value;
  const filteredArray = await filter(query);
  filteredArray.forEach((card) => createCard(card));
});


renderCards();
