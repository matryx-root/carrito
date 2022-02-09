import React from 'react';
import {CardImg, ModalFooter, ModalBody, ModalHeader, Modal, Button, Container} from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component{

    constructor(props){
      super();
      this.state = {
        modal:false,
        listaCarrito,
        stock: props.props.stock
      };

      this.toggle = this.toggle.bind(this);
      this.agregarCarrito = this.agregarCarrito.bind(this);

          }

    toggle(){
      this.setState(prevState => ({
        modal: !prevState.modal

      }));


    }


    agregarCarrito(){
      listaCarrito.push({
          "titulo": this.props.props.titulo,
          "precio": this.props.props.precio

          });
        this.setState(prevState => ({
        modal: !prevState.modal
        }));

        if(this.state.stock != 0){
          this.setState(prevState => ({
              stock: prevState.stock -1
          }));
        }else{
          alert("stock agotado")
        }

        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;
      }


    render() {
      return(
        <Container>
            <Button onClick={this.toggle}>Ver Ficha</Button>
          <Modal isOpen={this.state.modal}>
              <ModalHeader>{this.props.props.titulo} </ModalHeader>
              <ModalBody>
                  <CardImg src={this.props.props.imagen}/>
                  <p>El detalle del producto seleccionado es:</p>
                  {this.props.props.descripcion}
                  <p>Este producto tiene un valor de <b>{this.props.props.precio} </b>pesos</p>
                   <p>Hay {this.state.stock}  unidades de este productos disponibles</p>
              </ModalBody>

              <ModalFooter className="modalFooter">
                <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                <Button color="secondary" onClick={this.toggle}>Volver atras</Button>
              </ModalFooter>

          </Modal>
        </Container>
      );

    }

}
export default FichaProducto;
