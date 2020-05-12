const pokemonContainer = document.querySelector(".card-container");

export const createCard = (pokemon) => {
  const cardElement = document.createElement("li");
  let { name, id, types, imageUrl, rarity, set } = pokemon;
  cardElement.innerHTML = `
    <div class="card-img">
      <img src=${imageUrl}>
    </div>
    <div class="name">
      <h3>${name}</h3>
    </div>
    <div class="card-description">
      <p class="types">Type: ${types || "none"}</p>
      <p class="rarity">Rarity: ${rarity || "unknown"}</p>
      <p class="set">Set: ${set}</p>
      <p class="id">ID: ${id}</p>
    </div>
    `;
  pokemonContainer.appendChild(cardElement);
};



