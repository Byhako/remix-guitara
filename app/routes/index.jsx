import { useLoaderData } from '@remix-run/react'
import { getguitarras } from '~/models/guitarras.server'
import { getBlogs } from '~/models/blog.server'
import { getCursos } from '~/models/cursos.server'
import Guitarra from '~/components/guitarra'
import Blog from '~/components/blog'
import Curso from '~/components/curso'

import stylesGutarras from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'
import styles from '~/styles/curso.css'

export default function Index() {
  const { guitarras, blogs, curso } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestra colección</h2>

        <div className="guitarras-grid">
          {guitarras.map((guitarra) => <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />)}
        </div>
      </main>

      <Curso curso={curso} />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className="blog">
          {blogs.map(blog => <Blog key={blog.id} data={blog} />)}
        </div>
      </section>
    </>
  )
}

export function meta() {
  return (
    {
      charset: 'uft-8',
      title: 'GuitarLa',
      description: 'venta de guitarras',
      viewport: 'width=device-width, initial-scale=1'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGutarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader() {
  const [guitarras, blogs, curso] = await Promise.all([
    getguitarras(),
    getBlogs(),
    getCursos()
  ])
  return { guitarras: guitarras.data, blogs: blogs.data, curso: curso.data.attributes }
}