import { useEffect, useState } from 'react';

function usePokemon (pokemonId) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setPokemon({
              name: data.name,
              type: data.types[0].type.name,
              image: data.sprites.other['official-artwork'].front_default,
              abilities: [...data.abilities],
            });
          });
      }, []);

      return pokemon;
}

export {
    usePokemon
};