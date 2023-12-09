import React, { Component } from 'react';
import ProductoEnTabla from './ProductoEnTabla';

class PanelListadoProductos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            precioAndProductos: [],
        }
    };

    componentDidMount() {
        // llamada api productos
        fetch('http://localhost:3000/api/products')
            .then(response => {
                return response.json();
            })
            .then(productos => {
                this.setState({ precioAndProductos: productos.data })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                    <div className="col-lg-80 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">
                                    Listado de Productos
                                </h5>
                            </div>
                            <table className='listado-productos'>
                                <thead className='te-head'>
                                    <tr className='te-erre'>
                                        <th className='te-ache'>Productos</th>
                                        <th className='te-ache'>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.precioAndProductos.map((producto, i) => {
                                        return <ProductoEnTabla {...producto} key={i} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </>
        );
    }
}

export default PanelListadoProductos;