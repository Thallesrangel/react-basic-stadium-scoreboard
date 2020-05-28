import React from 'react';

export default class Contador extends React.Component {
    
    // Substituir construct para usar estados do componente
    constructor() {
        super();

        this.state = {
            contador: 0,
        };
    }
    
    decrementar() {
        // Alterando estado com setState obrigatório usar este método
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    incrementar() {
        this.setState({
            contador: this.state.contador +1,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrementar.bind(this)}>-</button>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}