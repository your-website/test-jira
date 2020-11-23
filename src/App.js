import "./App.css";
import NavBar from "./components/NavBar";
import GitList from "./components/GitList";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <GitList />
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
