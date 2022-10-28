import { Outlet } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export default function Tienda() {
  return (
    <main className="contenedor">

      <Outlet />
    </main>
  )
}

export function links() {
  return [
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}