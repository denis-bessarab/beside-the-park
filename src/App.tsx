import React from 'react';
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Footer from "./components/Footer/Footer";
function App() : React.JSX.Element {
  return (
    <div className="App">
      <Header/>
      <section className="App-body" data-testid="app-section">
        <Heading/>
        <EpisodesList/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
