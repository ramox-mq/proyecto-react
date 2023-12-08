import React, { Component } from 'react';
import Categoria from './Categoria';

class CategoriasPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreCategorias: [],
        }
    };

    componentDidMount() {
        // llamada api categorias
        fetch('http://localhost:3000/api/categories')
            .then(respuesta => {
                return respuesta.json();
            })
            .then(categorias => {
                this.setState({ nombreCategorias: categorias.data })
            })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Categorías
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.nombreCategorias.map((categoria, i) => {
                                return <Categoria {...categoria} key={i}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriasPanel;