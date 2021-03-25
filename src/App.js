import React from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js';
import Footer from './footer.js';
//import HornedBeasts from './Horned-Beasts.js';
import Data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    newData: Data,
  }
  }

  render() {
    return (
      <div>
        <Header />
        <Main beasts={this.state.newData} />
        <Footer />
      </div>
    )
  }
}


export default App;
