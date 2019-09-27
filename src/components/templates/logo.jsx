import React from 'react';
import jogo from './react.svg'
import logo2 from './icon-spring-boot.svg'
import logo3 from './plus-icon.svg'

import './logo.css';
 
export default props =>
    <aside className="jogo">            
        <img src={jogo} alt="jogo"/>
        <img src={logo3} className="App-logo3" alt="logo3" />
        <img src={logo2} className="App-logo2" alt="logo2" />
    </aside>