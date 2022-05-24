import './App.css';
import Header from './components/Header';
import Dropdown from './components/Dropdown';

const name = "Paul Beard"
const dropDown = {
  title: 'List1',
  options: ['first', 'second', 'third']
}

function App() {
  return (
    <div className="App">
      <Header name = {name}/>
      <Dropdown title = {dropDown.title} options = {dropDown.options} /> 
    </div>
  );
}

export default App;
