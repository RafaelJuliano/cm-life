import React from 'react';
import './style.css';

import Image from '../../structure/Image';
import Tabela from '../Tabela';

export default function ItemEspecialidade(props){
    return(
        <div id={props.id} className='container item-especialidade'>
            <div className='inside-container'>
                <div className='item-titulo'>
                    <h3>{props.titulo}</h3>
                    <p>{props.texto}</p>
                </div>

                <div className='lista-horarios'>
                    <Image src={props.imagem} alt={props.titulo} />
                    <Tabela>
                        {props.children}
                    </Tabela>
                </div>
            </div>
        </div>
    );
}