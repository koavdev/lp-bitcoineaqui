import './App.css';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Comercio from './Components/Comercio';
import Turismo from './Components/Turismo';

function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Comercio />
      <Turismo />
    </div>
  );
}

export default App;
