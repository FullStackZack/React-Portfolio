import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Nav />
          <Main />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
