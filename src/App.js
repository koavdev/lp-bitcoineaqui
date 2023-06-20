import './App.css';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Comercio from './Components/Comercio';
import Turismo from './Components/Turismo';
import Doacoes from './Components/Doacoes';
import Aprenda from './Components/Aprenda';
import Footer from './Components/Footer';
import Contato from './Components/Contato';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Turismo />
      <Comercio />  
      <Doacoes />
      <Aprenda />
      <Contato />
      <Footer />
      
    </div>
  );
}

export default App;
