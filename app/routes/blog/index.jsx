import { getBlogs } from '~/models/blog.server'
import { useLoaderData } from '@remix-run/react'
import Blog from '~/components/blog'

export default function Blogs() {
  const blogs = useLoaderData()

  return (
    <div>
      <h2 className="heading">Blog</h2>

      <div className="blog">
        {blogs.map(blog => <Blog key={blog.id} data={blog} />)}
      </div>
    </div>
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

export async function loader() {
  const blogs = await getBlogs()
  return blogs?.data ?? []
}