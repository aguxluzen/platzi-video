import React from 'react';
import './modal.css';

function Modal(props) {
    return (
        <div className='Modal'>
            Esto es un portal
            {props.children}
            <button className='Modal-close' onClick={props.handleCloseClick}>cerrar</button>
        </div>
    );
}

export default Modal;