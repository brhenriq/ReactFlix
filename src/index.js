import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/Home';
import CadastroVideo from '../src/pages/cadastro/video'
import CadastroCategoria from '../src/pages/cadastro/categoria'
import { BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={() => (<div>Página não encontrada</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
