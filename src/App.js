import './App.css';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Comercio from './Components/Comercio';
import Turismo from './Components/Turismo';
import Doacoes from './Components/Doacoes';
import Aprenda from './Components/Aprenda';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Turismo />
      <Comercio />  
      <Doacoes />
      <Aprenda />
    </div>
  );
}

export default App;
