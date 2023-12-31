import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, detalle }) => {
  const [actualizarCantidad, setActualizarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setActualizarCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='container'>
      <div className='card-detalle'>
        <h2 style={{ fontSize: '25px' }}>{nombre} </h2>
        <h3 style={{ fontSize: '20px' }}> $ {precio} </h3>
        <h3 style={{ fontSize: '20px' }}>Stock disponible: {stock} </h3>
        <p style={{ fontSize: '15px' }}> {detalle} </p>
        <img src={img} alt={nombre} className="card-img" />
        {actualizarCantidad > 0 ? (
          <div className='links-container'>
            <Link className='link-item' to='/cart'>Terminar compra</Link>
            <Link className='link-item' to='/'>Seguir comprando</Link>
          </div>
        ) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
      </div>
    </div>

  )
}

export default ItemDetail