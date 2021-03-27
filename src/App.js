import React from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js';
import Footer from './footer.js';
//import HornedBeasts from './Horned-Beasts.js';
import Data from './data.json';
import SelectedBeast from './selected-beast';

class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    newData: Data,
    displayModal: false,
    favoriteBeast: {},
  }
  }

  displayAsModal = (index) => {
    this.setState ({favoriteBeast: this.state.newData[index], displayModal: true});
  }

  handleClose =() => {
    this.setState({displayModal: false});
  }


  render() {
    return (
      <div className="App">
        <header>
        <Header />
        <Main beasts={this.state.newData}
        displayAsModal={this.displayAsModal} 
        />
        <SelectedBeast
        show={this.state.displayModal}
        handleClose={this.handleClose}
        favoriteBeast={this.state.favoriteBeast}
        />
        <Footer />
        </header>
      </div>
    );
  }
}


export default App;
