import { getBlog } from '~/models/blog.server'
import { useLoaderData } from '@remix-run/react'
import { formatDate } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export default function Blog() {
  const blog = useLoaderData()

  if (!blog.data.length) {
    return (
      <h2 style={{textAlign: 'center'}}>No existe este blog</h2>
    )
  }

  const { imagen, titulo, contenido, publishedAt } = blog?.data[0]?.attributes
  return (
    <main className='contenedor post mt-3'>
      <img src={imagen?.data?.attributes?.url} alt='blog' className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">Publicado: {formatDate(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </main>
  )
}

export async function loader({ params }) {
  const { titulo } = params
  const blog = await getBlog(titulo)
  return blog
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta({ data }) {
  const titulo = data?.data[0]?.attributes?.titulo ?? ''
  if (titulo) {
    return (
      {
        title: `GuitarLa - ${titulo}`,
        description: 'La mejor guitarra'
      }
    )
  }
  return (
    {
      title: `GuitarLa - No encontrado`,
      description: 'La mejor guitarra'
    }
  )
}