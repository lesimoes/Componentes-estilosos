function fetchPokemons(id) {
  return new Promise((res, rej) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        res({
          id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          type: data.types[0].type.name,
        });
      });
  });
}

function getPokemons() {
  const promises = [1, 4, 7, 10, 14, 38, 48, 98].map((value) =>
    fetchPokemons(value)
  );
  return Promise.allSettled(promises);
}

export { getPokemons };
