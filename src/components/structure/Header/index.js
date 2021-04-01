import React from 'react';
import Image from '../Image';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header container'>
            <nav className='inside-container nav'>
                <div className='logo'>
                    <Link to='/cm-life'>
                        <h1>
                            <Image src='assets/logo.png' alt='Logo'/>
                        </h1>
                    </Link>
                </div>

                <div className='menu'>
                    <a href='#sobre'>Sobre</a>
                    <a href='#especialidades'>Especialidades</a>
                    <a href='#contato'>Contato</a>
                </div>
            </nav>
        </div>
    );
}