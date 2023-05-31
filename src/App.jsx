import './css/App.css'
import Counter from './pages/Counter'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <div>
      <Cabecalho/>
      <h1>Redux Toolkit with Redux Persist Example</h1>
      <Counter />
    </div>
  );
}

export default App;