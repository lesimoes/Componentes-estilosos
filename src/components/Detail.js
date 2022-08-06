import { useParams, useNavigate } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import Card from './Card';

export default function Detail() {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const pokemon = usePokemon(pokemonId)



  return (
    <div className="Detail">
      {pokemon.name ? (
        <Card type={pokemon.type} large>
          <img src={pokemon.image} alt/>
          <div>
            {pokemon.abilities.map((value, index) => (
              <button onDoubleClick={() => alert(`Usou ${value.ability.name}`)} key={index}>{value.ability.name}</button>
            ))}
          </div>
        </Card>
      ) : (
        'carregando...'
      )}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
