import { useEffect, useState } from 'react';
import { getPokemons } from '../data';
import Card from './Card';

export default function List() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons([...res.map((data) => data.value)]);
    });
  }, []);

  return (
    <div className="App">
      {pokemons.map((pokemon, index) => (
        <Card key={index} {...pokemon} />
      ))}
    </div>
  );
}
