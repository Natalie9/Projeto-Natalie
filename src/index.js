import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Atividades from './Atividades';
import Inicio from './Inicio';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>

            <Route path="/" component={App} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/atividades" component={Atividades} />

        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
