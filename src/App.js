import React from 'react';
import Producto from './componentes/Producto';
import Navegacion from './componentes/Navegacion';
import './App.css';
import {Container, Row} from 'reactstrap';
import {listaProductos} from './listaProductos.json';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      listaProductos
    };
  }


render() {
  const arregloComponente = this.state.listaProductos.map(
    (listaProductos, i) => {
      return(
        <Producto
        key={i}
        titulo={listaProductos.titulo}
        imagen={listaProductos.imagen}
        descripcion={listaProductos.descripcion}
        precio={listaProductos.precio}
        stock={listaProductos.stock}

        />

      );
    }
  );
  return (
    <Container>
      <Navegacion titulo="Mi primer carrito de compras"/>
      <Row>
        {arregloComponente}
      </Row>
      </Container>

    );
  }
}

export default App;
