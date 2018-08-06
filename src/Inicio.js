import React, { Component } from 'react';
import BotaoInicio from './components/BotaoInicio.js';
import NavBar from './components/NavBar.js';
import { Link } from 'react-router-dom'
class Inicio extends Component {

  render() {
    return (
      <div>
               
        <Link to='/atividades'><BotaoInicio /></Link>
      </div>
    );
  }
}

export default Inicio;
