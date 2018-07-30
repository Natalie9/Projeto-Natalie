import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Atividades from './Atividades';
import Inicio from './Inicio';
import {Route,Switch, Link} from 'react-router-dom';

class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar />
        <Link to='/'> Pagina 0 - </Link>         
        <Link to='/inicio'>Pagina 1 - </Link> 
        <Link to='/atividades'>Pagina 2</Link>
      </div>
    );
  }
}

export default App;
