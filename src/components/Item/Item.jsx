import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, descripcion, precio, imagen}) => {
  return (
    <div className="cardProducto" > 
        <img className="imgProducto" src={imagen} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Descripción: {descripcion}</p>
        <p>Precio: $  {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`} className="btnProducto"> Ver Detalles </Link>
    </div>
  )
}

export default Item

//<button className="btnProducto" > Ver detalles </button>