import { Outlet, useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export default function Tienda() {
  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()}/>
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