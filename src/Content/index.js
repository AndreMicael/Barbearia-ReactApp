import React from 'react';
import "./Content.css"

function Content() {
    return ( 

            <section className='content-container'>
                <h1 className='content-Title'>Bem-vindo a Barber Shop</h1>

                <p className='content-p-bold'>
                Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                </p>


                <p className='content-p-regular'>
                Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>
                
                <p className='content-p-sign'>
                S. Kelly
                </p>
            </section>

     );
}

export default Content;