import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    const img = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682700045/DigitalDrinksLogo_odwwyh.png"
  return (
    <header className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <img className="img" src={img} alt="Digital Drinks" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          VINOS
        </li>
        <li className="nav-item">
          ESPUMANTES
        </li>
        <li className="nav-item">
          WHISKIES
        </li>
        <li className="nav-item">
          GIN
        </li>
        <li className="nav-item">
          LICORES
        </li>
        <li className="nav-item">
          VODKA
        </li>
        <li className="nav-item">
          RON
        </li>
        <li className="nav-item">
          APERITIVOS
        </li>
        <li className="nav-item">
          CERVEZAS
        </li>
        <li className="nav-item">
          TODOS
        </li>
      </ul>
    </nav>
    <div>
        
    <ul className="navbar-nav">
    <li className="nav-item">
          INGRESA
        </li>
        <li className="nav-item">
          REGISTRATE
        </li>
    </ul>

    </div>
    <CartWidget/>
  </div>
</header>

  )
}

export default NavBar