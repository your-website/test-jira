import "./App.css";
import NavBar from "./components/NavBar";
import GitList from "./components/GitList";
import HomePage from "./components/HomePage";
import FooterPage from "./components/FooterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Route path="/" component={HomePage} exact />
          <Route
            path="/gitlist/:id"
            render={({ match, location, history }) => {
              const { id } = match.params;
              return <GitList itemId={+id} location={location} />;
            }}
          />
        </main>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
