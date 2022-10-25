import { getguitarra } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export default function Guitarra() {
  const guitarra = useLoaderData()
  if (!guitarra.data.length) {
    return (
      <h2 style={{textAlign: 'center'}}>No existe esta guitarra</h2>
    )
  }

  const { nombre, descripcion, precio, imagen } = guitarra?.data[0]?.attributes
  return (
    <main className='contenemodr guitarra'>
      <img src={imagen?.data?.attributes?.url} alt="imagen" className="imagen" />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  )
}

export async function loader({ request, params }) {
  const { nombre } = params
  const guitarra = await getguitarra(nombre)
  return guitarra
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
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