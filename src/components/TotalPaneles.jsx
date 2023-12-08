import React, { Component } from 'react';

class TotalPaneles extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            listaProductos: [],
            listaUsuarios: [],
            listaCategorias: []
        }
    }

    componentDidMount(){
        //primera api (productos)
        fetch('http://localhost:3000/api/products')
            .then(response => {
                return response.json();
            })
            .then(productos => {
                this.setState({listaProductos: productos.data})
            })
            .catch(error => console.log(error));
        
        //segunda api (usuarios)
        fetch('http://localhost:3000/api/users')
            .then(respons => {
                return respons.json();
            })
            .then(usuarios => {
                this.setState({listaUsuarios: usuarios.data})
            } )
            .catch(error => console.log(error));

        //tercera api (categorias)
        fetch('http://localhost:3000/api/categories')
            .then(respuesta => {
                return respuesta.json();
            })
            .then(categorias => {
                this.setState({listaCategorias: categorias.data})
            })
    }

    render(){
    return (
        <div className="row">
            {/* Movies in Data Base */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Total Productos
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {this.state.listaProductos.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-utensils fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Total awards */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    
                                    Total Categorías
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {this.state.listaCategorias.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-award fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Actors quantity */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Total Usuarios
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {this.state.listaUsuarios.length}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default TotalPaneles;