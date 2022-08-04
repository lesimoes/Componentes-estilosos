import { Link } from 'react-router-dom';

export default function Card({ id, name, image, type }) {
  return (
    <div className={`Card ${type}`}>
      <span>{name}</span>
      <img src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <button>Detalhes</button>
      </Link>
    </div>
  );
}
