import Navegation from './nav'

export default function Footer() {

  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navegation />

        <p className="copyright">Todos los derechos son mios <small>({new Date().getFullYear()})</small></p>
      </div>
    </footer>
  )
}