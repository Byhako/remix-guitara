import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'
import { ClientOnly } from 'remix-utils'


export default function Carrito() {
  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (acumulado, producto) => acumulado + producto.cantidad*producto.precio, 0
    )
    setTotal(calculoTotal)
  }, [carrito])

  return (
    <ClientOnly fallback={'Cargando ...'}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>

          {carrito?.length ? (
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
                    <button
                      type='button'
                      className='btn-eliminar'
                      onClick={() => eliminarGuitarra(item.id)}
                    >X</button>
                  </div>
                ))}
              </div>

              <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $ {total}</p>
              </aside>
            </div>
          ) : (
            <h3>No hay productos</h3>
          )}

        </main>
      )}
    </ClientOnly>
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
