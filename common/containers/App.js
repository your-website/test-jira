import React from 'react'
import { Route } from "react-router-dom";

import FooterPage from '../components/FooterPage'
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';
import RepoPage from '../pages/RepoPage';
import GitList from '../components/GitList';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Route path="/" component={HomePage} exact />
        <Route path="/api" component={RepoPage} exact />
        <Route
          path="/repositories/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <GitList pageId={+id} />;
          }}
        />
      </main>
      <FooterPage />
    </div>
  )
}

export default App
