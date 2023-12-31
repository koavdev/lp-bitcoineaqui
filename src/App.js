import './App.css';
import Home from './Pages/home';
import Sobre from './Pages/sobre'
import Comercio from './Pages/comercio';
import Turismo from './Pages/turismo';
import Doacoes from './Pages/doacoes';
import Aprenda from './Pages/aprenda';
import Contato from './Pages/contato';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/turismo' element={<Turismo />} />
        <Route path='/comercio' element={<Comercio />} />
        <Route path='/doacoes' element={<Doacoes />} />
        <Route path='/aprenda' element={<Aprenda />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;
