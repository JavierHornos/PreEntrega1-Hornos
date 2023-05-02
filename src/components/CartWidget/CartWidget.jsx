import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682715613/carrito_sin_fondo_nzbwyy.png"
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de Compras" />
        <strong className="numerito" > 5 </strong>
    </div>
  )
}

export default CartWidget