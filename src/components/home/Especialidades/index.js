import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Image from '../../structure/Image';

export default function Especialidades() {
    return (
        <div id='especialidades' className='container especialidades'>
            <div className='inside-container titulo'>
                <h3>Uma clínica de multiespecialidade</h3>
                <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente extrutura, comodidade e com a segurança de que você precisa</p>
            </div>
            <div className='inside-container esp-list'>
                <div className='esp-box'>
                    <a href='/'>
                        <Image className='esp-img' src='assets/ortopedia1.png' alt='Ortopedista' />
                        <p>Ortopedista</p>
                    </a>
                </div>
                <div className='esp-box'>
                    <a href='/'>
                        <Image className='esp-img' src='assets/pediatra.png' alt='Pediatra' />
                        <p>Pediatra</p>
                    </a>
                </div>
                <div className='esp-box'>
                    <a href='/'>
                        <Image className='esp-img' src='assets/geriatra.png' alt='Geriatra' />
                        <p>Geriatra</p>
                    </a>
                </div>
            </div>
            <Link className='btn' to='/especialidades'>Ver horários</Link>
        </div>
    );
}