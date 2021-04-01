import React from 'react';
import './style.css';

import Header from '../../components/structure/Header';
import Footer from '../../components/structure/Footer';

import Navigation from '../../components/especialidades/Navigation';
import ItemEspecialidade from '../../components/especialidades/ItemEspecialidade';
import ItemTabela from '../../components/especialidades/ItemTabela';

export default function Especialidades() {
    return (
        <section>
            <Header />

            <Navigation />

            <ItemEspecialidade id='ortopedia' titulo='Ortopedia' texto='A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.' imagem='assets/ortopedia.png'>
                <ItemTabela dias='Segunda e Quartas' horarios='14:00 às 21:00' medico='Dr. Daniel Souza' />
                <ItemTabela dias='Terça, Quinta e Sexta' horarios='8:00 às 13:00' medico='Dra. Daniele Almeida' />
                <ItemTabela dias='Sábado' horarios='8:00 às 21:00' medico='Dr. Manoel Bento' />
            </ItemEspecialidade>

            <ItemEspecialidade id='pediatria' titulo='Pediatria' texto='A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.' imagem='assets/pediatra.png'>
                <ItemTabela dias='Segunda e Quartas' horarios='8:00 às 15:00' medico='Dra. Elaine pinheiro' />
                <ItemTabela dias='Terça, Quinta e Sexta' horarios='13:00 às 21:00' medico='Dr. Anderson Ramos' />
                <ItemTabela dias='Sábado' horarios='8:00 às 12:00' medico='Dra. Manoela Foster' />
            </ItemEspecialidade>

            <ItemEspecialidade id='geriatria' titulo='Geriatria' texto='Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.' imagem='assets/geriatra.png'>
                <ItemTabela dias='Segunda e Quinta' horarios='9:00 às 12:00' medico='Dr. Antônio Freitas' />
                <ItemTabela dias='Terça e Quarta' horarios='08:00 às 19:00' medico='Dr. Almir Aguiar' />
                <ItemTabela dias='Sexta' horarios='8:00 às 21:00' medico='Dr. Manoel Bento' />
                <ItemTabela dias='Sábado' horarios='08:00 às 14:00' medico='Dra. Andrea Almeida' />
            </ItemEspecialidade>

            <ItemEspecialidade id='psicologia' titulo='Psicologia' texto='Psicologia é a especialidade médica que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.' imagem='assets/psicologo.png'>
                <ItemTabela dias='Segunda, terça e quarta' horarios='8:00 às 21:00' medico='Dra. Diane Faguntes' />
                <ItemTabela dias='Quinta e Sexta' horarios='14:00 às 18:00' medico='Dr. Daniel Dias' />
                <ItemTabela dias='Sábado' horarios='10:00 às 15:00' medico='Dra. Beatriz Luz' />
            </ItemEspecialidade>

            <ItemEspecialidade id='fisioterapia' titulo='Fisioterapia' texto='Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas.' imagem='assets/fisioterapia.png'>
                <ItemTabela dias='Segunda e Quinta' horarios='11:00 às 20:00' medico='Dr. Alberto de Paula' />
                <ItemTabela dias='Segunda e Quartas' horarios='08:00 às 15:00' medico='Dra. Maria Fernades' />
                <ItemTabela dias='Terça e sexta' horarios='14:00 às 21:00' medico='Dra. Elaine Peixoto' />
                <ItemTabela dias='Terça e quinta' horarios='08:00 às 14:00' medico='Dra. Elaine Peixoto' />
                <ItemTabela dias='Quarta e Sábado' horarios='8:00 às 21:00' medico='Dra. Bianca Rocha' />
            </ItemEspecialidade>

            <Footer />
        </section>
    );
}