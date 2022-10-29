import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'

export default function Carrito() {
  const { carrito, actualizarCantidad } = useOutletContext()


  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>

      {carrito.length ? (
        <div className="contenido contentCard">
          <div className="carrito">
            <h2>Articulos</h2>
            {carrito.map(item => (
              <div key={item.id} className='producto'>
                <div>
                  <img src={item.imagen} alt='guitarra' />
                </div>

                <div>
                  <p className="nombre">{item.nombre}</p>
                  <p className='precio'>$ <span>{item.precio}</span></p>
                  <p className='cantidad'>Cantidad:</p>
                  <select
                    value={item.cantidad}
                    className='select'
                    onChange={(e) => actualizarCantidad({
                      cantidad: +e.target.value,
                      id: item.id
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className='subtotal'>Subtotal: $ <b>{item.precio * item.cantidad}</b></p>
                </div>
              </div>
            ))}
          </div>
          <aside className="resumen">
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $</p>
          </aside>
        </div>
      ) : (
        <h3>No hay productos</h3>
      )}

    </main>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return {
    title: 'GutaraLa - Carrito',
    description: 'compra tus guitarras'
  }
}
