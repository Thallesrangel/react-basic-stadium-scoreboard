import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "28/05/2020",
        horario: "19h",
    },

    casa: {
        nome: "Vasco",
    },

    visitante: {
        nome: "Flamengo",
    }
};

export default class App extends React.Component {
    render() {
        return ( 
            <PlacarContainer {...dados} />
                // Jeito sem SpredOperator
                // <PlacarContainer partida={dados.partida}
                //                 casa={dados.casa}
                //                 visitante={dados.visitante}/>
        )
    }
}