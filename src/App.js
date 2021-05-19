import logo from './logo.svg';
import './App.css';
// import Documentation from "./Documentation"
// import Counter from "./Counter";
import Employee from './Emloyee';


function App() {
  const headerText = "OMG I learn React"
  return (
    <div className="App">
      <header className="App-header">
      {/* we used it in the previous lesson to make a counter !!
      <h2>Welcome to counter </h2>
      <Counter/> */}
      <h1> Company Directory</h1>
      <Employee firstName="Alina" lastName="Samoteev" age="39"/>
      <Employee firstName="Dinu" lastName="Samoteev" age="36"/>
      <Employee firstName="Gabi" lastName="Samoteev" age="2"/>
      <Employee firstName="Mika" lastName="Samoteev" age="1"/>


       </header>
    </div>
  );
}

export default App;
