import styles from '~/styles/blog.css'
import { getBlogs } from '~/models/blog.server'
import { useLoaderData } from '@remix-run/react'
import Blog from '~/components/blog'

export default function Blogs() {
  const blogs = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>

      <div className="blog">
        {blogs.map(blog => <Blog key={blog.id} data={blog} />)}
      </div>
    </main>
    )
}


export function meta() {
  return (
    {
      title: 'GuitarLa - Blog',
      description: 'El mejor conocimiento de guitarras a tu alcance.'
    }
  )
}

export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}

export async function loader() {
  const blogs = await getBlogs()
  return blogs?.data ?? []
}