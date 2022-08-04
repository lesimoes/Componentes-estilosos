import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detail() {
  const [pokemon, setPokemon] = useState({});
  const { pokemonId } = useParams();

  const navigate = useNavigate();


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

  return (
    <div className="Detail">
      {pokemon.name ? (
        <div className={`Card Large ${pokemon.type}`}>
          <img src={pokemon.image} />
          <div>
            {pokemon.abilities.map((value, index) => (
              <button onDoubleClick={() => alert('Foii')} key={index}>{value.ability.name}</button>
            ))}
          </div>
        </div>
      ) : (
        'carregando...'
      )}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
