import "./App.css";
import sky from "./purple-sky.png";

function App() {
  return (
    <div className="App">
      <header>Hello</header>
      <img src={sky} className="sky" alt="sky" />
      <button href="#" className="btn btn-primary shadow">
        Hello again
      </button>
    </div>
  );
}

export default App;
