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
        <Dictionary defaultKeyword="sunset" />
      </div>
      <footer className="reference">
        <a
          href="https://github.com/paulinagonzalezc/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Paulina Gonzalez</span>
      </footer>
    </div>
  );
}
export default App;
