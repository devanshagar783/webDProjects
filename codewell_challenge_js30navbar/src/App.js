import './App.css';
import Brands from './container/Brands';
import Header from './container/Header';
import Home from './container/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Brands />
    </div>
  );
}

export default App;
