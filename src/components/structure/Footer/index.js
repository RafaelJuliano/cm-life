import React from 'react';
import './style.css';
import Image from '../Image';

export default function Footer() {
    return (
        <footer className='container footer'>
            <div className='footer-box inside-container'>
                <Image src='assets/logo.png' alt='Logo' />
                <div className='footer-content'>
                    <p>Telefone e WhatsApp: (21) 99966-5555</p>
                    <p>Av Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro</p>
                    <p>&copy; 2020 Clínica Médica Life - Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    );
}