import "./Item.css"

const Item = ({id, nombre, descripcion, precio, imagen}) => {
  return (
    <div className="cardProducto" > 
        <img className="imgProducto" src={imagen} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Descripción: {descripcion}</p>
        <p>Precio: $  {precio}</p>
        <p>ID: {id}</p>
        <button className="btnProducto" > Ver detalles </button>
    </div>
  )
}

export default Item