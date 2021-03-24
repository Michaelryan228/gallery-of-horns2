import React from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js';
import Footer from './footer.js';
//import HornedBeasts from './Horned-Beasts.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
