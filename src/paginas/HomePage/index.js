import React from 'react';
import './style.css';

import Header from '../../components/structure/Header';
import Footer from '../../components/structure/Footer';

import Title from '../../components/home/Title';
import Sobre from '../../components/home/Sobre';
import Especialidades from '../../components/home/Especialidades';
import Contato from '../../components/home/Contato';

export default function HomePage() {
    return (
        <section className='home'>
            <Header />

            <Title />
            <Sobre />
            <Especialidades />
            <Contato />
            
            <Footer />
        </section>
    );
}

