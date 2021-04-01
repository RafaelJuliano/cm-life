import React from 'react';

export default function Image(props) {
    return (        
            <img className='img' src={props.src} alt={props.alt} />        
    );
}