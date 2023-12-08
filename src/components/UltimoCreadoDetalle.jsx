import React, { Component } from 'react';

class UltimoCreadoDetalle extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            ultimoProductoCreado: [],
        }
    };

    componentDidMount(){
        //llamada api productos
        fetch('http://localhost:3000/api/products')
            .then(response => {
                return response.json();
            })
            .then(productos => {
                this.setState({ultimoProductoCreado: productos.data[productos.data.length - 1]})
            })
            .catch(error => console.log(error));
    }

    render(){
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Último producto en DB: {this.state.ultimoProductoCreado.name}
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: "40rem" }}
                                src={this.state.ultimoProductoCreado.image}
                                alt=" Star Wars - Mandalorian "
                            />
                        </div>
                        <p>
                            {this.state.ultimoProductoCreado.description}
                        </p>
                        <a
                            className="btn btn-danger"
                            target="_blank"
                            rel="nofollow"
                            href="/"
                        >
                            View movie detail
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
}

export default UltimoCreadoDetalle;