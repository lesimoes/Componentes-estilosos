import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
