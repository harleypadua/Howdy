import React from 'react';
import Parties from './PartyCreation/Parties.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Parties Page</h1>
        <Parties ></Parties>
      </div>
    );
  }
}

export default App;