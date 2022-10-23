import { useLoaderData } from '@remix-run/react'
import { getguitarras } from '~/models/guitarras.server'
import { Guitarra } from '~/components/guitarra'

export default function Tienda() {
  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra colección</h2>

      <div className="guitarras-grid">
        {guitarras.map((guitarra) => <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />)}
      </div>
    </main>
  )
}

export function meta() {
  return (
    {
      title: 'GuitarLa - Tienda',
    }
  )
}

export async function loader() {
  const guitaras = await getguitarras()
  return guitaras.data
}