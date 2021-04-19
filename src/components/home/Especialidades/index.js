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
                    <Link to='/cm-life/especialidades/#ortopedia'>
                        <Image className='esp-img' src='assets/ortopedia1.png' alt='Ortopedista' />
                        <p>Ortopedista</p>
                    </Link>
                </div>
                <div className='esp-box'>
                    <Link to='/cm-life/especialidades/#pediatria'>
                        <Image className='esp-img' src='assets/pediatra.png' alt='Pediatra' />
                        <p>Pediatra</p>
                    </Link>
                </div>
                <div className='esp-box'>
                    <Link to='/cm-life/especialidades/#geriatria'>
                        <Image className='esp-img' src='assets/geriatra.png' alt='Geriatra' />
                        <p>Geriatra</p>
                    </Link>
                </div>
            </div>
            <Link className='btn' to='/cm-life/especialidades'>Ver horários</Link>
        </div>
    );
}