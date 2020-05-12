export const getPokemon = async (url) => {
  const response = await fetch(url)
  .then((response) => response.json())
  .then((response) => response.cards)
  return response;

};

