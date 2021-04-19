import React from 'react';
import Image from '../Image';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header container'>
            <nav className='inside-container nav'>
                <div className='logo'>
                    <Link to='/cm-life/'>
                        <h1>
                            <Image src='assets/logo.png' alt='Logo'/>
                        </h1>
                    </Link>
                </div>

                <div className='menu'>
                    <Link to='/cm-life/'>Home</Link>
                    <a href='/cm-life/#sobre'>Sobre</a>
                    <a href='/cm-life/#especialidades'>Especialidades</a>
                    <Link to='/cm-life/especialidades'>Horários</Link>
                    <a href='/cm-life/#contato'>Contato</a>
                </div>
            </nav>
        </div>
    );
}