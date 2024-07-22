import { Link } from "react-router-dom"

import  "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="nav">

        <ul>

            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/cadastrar'>Cadastrar Celular</Link>
            </li>

            <li>
                <Link to='/sobre'>Sobre</Link>
            </li>

        </ul>
      
    </nav>
  )
}

export default NavBar
