import React from 'react';
import './style.css';

export default function Tabela(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Dias</th>
                    <th>Horários</th>
                    <th>Médico(a)</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );

}