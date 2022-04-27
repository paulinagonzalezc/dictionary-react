import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="col-4">• Dictionary •</header>

      <div className="container dictionary">
        <Dictionary defaultKeyword="sunny" />
        <footer>Coded by Paulina</footer>
      </div>
    </div>
  );
}

export default App;
