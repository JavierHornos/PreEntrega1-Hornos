import "./ItemDetail.css"

const ItemDetail = ({id, nombre, descripcion, precio, imagen }) => {
  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Descripción: {descripcion}</p>
        <img className="img" src={imagen} alt={nombre} />
    </div>
  )
}

export default ItemDetail