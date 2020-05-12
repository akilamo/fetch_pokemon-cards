const url = 'https://api.pokemontcg.io/v1/cards';
const pokemonContainer = document.querySelector(".card-container");

import {getPokemon} from "./API.js"
import {createCard} from "./DOM.js"


const renderCards = async () => {
  pokemonContainer.innerHTML = "";
  const allCards = await getPokemon(url);
  allCards.cards.forEach((card) => createCard(card));  
};

renderCards()
