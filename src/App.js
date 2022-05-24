import './App.css';
import Header from './components/Header';

const name = "Paul Beard"

function App() {
  return (
    <div className="App">
      <Header name = {name}/>
    </div>
  );
}

export default App;
