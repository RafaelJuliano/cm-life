import React from 'react';
import './style.css';

export default function Navigation(){
    return(
        <div className='container navigation'>
            <div className='inside-container'>
                <nav className='nav-itens'>                    
                        <a href='#ortopedia'>Ortopedia</a>
                        <a href='#pediatria'>Pediatria</a>
                        <a href='#geriatria'>Geriatria</a>
                        <a href='#psicologia'>Psicologia</a>
                        <a href='#fisioterapia'>Fisioterapia</a>                                  
                </nav>
                <h2>Conheça as nossas especialidades</h2>
            </div>
        </div>
    );
}