import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    const imgLogo = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682700045/DigitalDrinksLogo_odwwyh.png"
  return (
    <header>
        <img className="imgLogo" src={imgLogo} alt="Digital Drinks" />

        <nav>
            <ul>
                <li>VINOS</li>
                <li>ESPUMANTES</li>
                <li>WHISKIES</li>
                <li>GIN</li>
                <li>LICORES</li>
                <li>VODKA</li>
                <li>RON</li>
                <li>APERITIVOS</li>
                <li>CERVEZAS</li>
            </ul>
        </nav>

        <nav>
            <ul>
                <li>INGRESÁ</li>
                <li>REGISTRATE</li>    
            </ul>
        </nav>

        <li><CartWidget/></li>
       
    </header>
  )
}

export default NavBar