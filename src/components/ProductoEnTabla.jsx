import React, { Component } from 'react';

function ProductoEnTabla(props) {
    return ( 
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
        </>
     );
}

export default ProductoEnTabla;