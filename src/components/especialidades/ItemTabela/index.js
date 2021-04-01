import React from 'react';

export default function ItemTabela(props){
    return(
        <tr>
            <td>{props.dias}</td>
            <td>{props.horarios}</td>
            <td>{props.medico}</td>
        </tr>

    );
}