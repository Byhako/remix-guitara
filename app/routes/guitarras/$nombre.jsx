import { useState } from 'react'
import { getguitarra } from '~/models/guitarras.server'
import { useLoaderData, useOutletContext } from '@remix-run/react'

export default function Guitarra() {
  const guitarra = useLoaderData()
  const { agregarCarrito } = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const [showmessage, setShowmessage] = useState(false)
  if (!guitarra.data.length) {
    return (
      <h2 style={{textAlign: 'center'}}>No existe esta guitarra</h2>
    )
  }

  const { nombre, descripcion, precio, imagen } = guitarra?.data[0]?.attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Debes seleccionar la cantidad.')
      return
    }

    setShowmessage(true)

    const guitarraSelect = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSelect)
    setTimeout(() => setShowmessage(false), 2000)
  }


  return (
    <div className='guitarra'>
      <img src={imagen?.data?.attributes?.url} alt="imagen" className="imagen" />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>

        <form className='formulario' onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            onChange={e => setCantidad(parseInt(e.target.value))}
            name="cantidad"
            id="cantidad"
          >
            <option value=""> -- Seleccione -- </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            value='Agregar al Carrito'
          />
        </form>
      </div>

      {showmessage && (
        <p className='message'>Guitarra agregada al carrito</p>
      )}

    </div>
  )
}

export async function loader({ request, params }) {
  const { nombre } = params
  const guitarra = await getguitarra(nombre)
  return guitarra
}

export function meta({ params }) {
  const { nombre } = params
  return (
    {
      title: `GuitarLa - ${nombre}`,
      description: 'La mejor guitarra'
    }
  )
}