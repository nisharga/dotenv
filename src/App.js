import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>My name is: {process.env.REACT_APP_S3_BUCKET}</h2>
        <h1>My name is nisharga</h1>
      </header>
    </div>
  );
}

export default App;
