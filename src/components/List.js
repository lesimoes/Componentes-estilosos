import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemons } from '../data';
import { Card } from './shared';

export default function List() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons([...res.map((data) => data.value)]);
    });
  }, []);

  return (
    <div className="App">
      {pokemons.map(({name, image, id, type}, index) => (
        <Card key={index} type={type}>
            <span>{name}</span>
              <img src={image} alt={name} />
              <Link to={`/detail/${id}`}>
                <button>Detalhes</button>
              </Link>
        </Card>
      ))}
    </div>
  );
}
