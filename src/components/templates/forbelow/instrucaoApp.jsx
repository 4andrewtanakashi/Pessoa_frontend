import React, { Component } from 'react';
import ListaPessoas from './ListaPessoas';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PessoasComponent from '../../../service/PessoaComponent';
import pessoaId from './PessoaId';
import Title from './Title';
import pesNome from './PessoasNome';

class instrucaoApp extends Component {
   
    render() {
        return (
            <Router history={this.history}>
                <> 
                    <Switch>
                        <Route path="/" exact component={Title}/>
                        <Route path="/pessoas" exact component={ListaPessoas}/>
                        <Route path="/pessoa/:id" component={pessoaId}/>
                        <Route path="/pessoas/:id" component={PessoasComponent}/>
                        <Route path="/pes/nome/:palavra" component={pesNome}/>
                    </Switch>
                </>
            </Router>
            
        )
    }
}

export default instrucaoApp;