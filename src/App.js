import logo from './logo.svg';
import './App.css';
import Documentation from "./Documentation"
import Counter from "./Counter";

function App() {
  const headerText = "OMG I learn React"
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to counter </h2>
      <Counter/>

       </header>
    </div>
  );
}

export default App;
