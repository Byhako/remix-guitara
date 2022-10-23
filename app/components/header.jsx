import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegation from './nav'

export default function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/' className="logo">
          <img src={logo} alt='logo' className='logo' />
        </Link>

        <Navegation />
      </div>
    </header>
  )
}