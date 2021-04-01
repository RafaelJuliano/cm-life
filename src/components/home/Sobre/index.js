import React from 'react';
import './style.css';

import Image from '../../structure/Image';

export default function Sobre() {
    return (
        <div id='sobre' className='container sobre'>
            <div className='inside-container titulo'>
                <h3>Sobre a clínica</h3>
                <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente extrutura, comodidade e com a segurança de que você precisa</p>
            </div>
            <div className='inside-container lista'>
                <div className='medico'>
                    <Image src='assets/medico.jpg' alt='Doutor' />
                </div>
                <div className='itens-lista'>
                    <h3>Aqui na nossa clínica você vai encontrar:</h3>
                    <ul>
                        <li>Horário flexível. Atendemos de segunda à sábado.</li>
                        <li>Estacionamento amplo com 600 vagas.</li>
                        <li>Sala de espera com TV e Wifi.</li>
                        <li>Agendamento pelo telefone ou WhatsApp.</li>
                        <li>Excelente localização.</li>
                        <li>Entrega de exames em sua residência</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}