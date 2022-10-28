import styles from '~/styles/blog.css'
import { Outlet } from '@remix-run/react'

export default function Blogs() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
    )
}

export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}
