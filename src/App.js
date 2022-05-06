import background from "./background4.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="row">
        <header className="col-6">• Dictionary •</header>
        <div className="col-5"></div>
      </div>

      <div className="container dictionary">
        <Dictionary defaultKeyword="ocean" />
      </div>
      <footer>Coded by Paulina</footer>
    </div>
  );
}
export default App;
