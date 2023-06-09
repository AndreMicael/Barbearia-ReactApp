import React from 'react';
import "./Header.css"



function Botao(props) {

    const divStyle = {
       
        color: props.cor[0] ,
        border: props.cor[1],
       
    };
   

    return (             
        <div className='mode-box'>
        <button onClick={props.event}>
        <div className='mode-button' style={divStyle}>
            <img className='mode-img' alt="DarkMode" src={props.imgButton} />           
            <p>{props.nome}</p>
        </div>
        </button>
    </div>
       

     ); 
}

export {Botao};




