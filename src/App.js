import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Logo from './components/templates/logo';

// import Nav from './components/templates/nav';
import Main from './components/templates/main';

// import Footer from './components/templates/footer';

class App extends Component {
    render() {
        return (
        
            <div className="app">
                <Logo/>
                {/* <Nav/> */}
                <Main icon="home" title="Início" subtitle="CRUD Cadastro"/>
                {/* <Footer/> */}
            </div>

        );
    }
}

export default App;
