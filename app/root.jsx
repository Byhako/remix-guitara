import { useState, useEffect } from 'react'
import { Meta, Links, Outlet, useCatch, Scripts, LiveReload } from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'

export default function App() {
  const carritoLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) : null
  const [carrito, setCarrito] = useState(carritoLs ?? [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (guitarra) => {
    let oldRegister = -1;

    carrito?.forEach((guitarraState, index) => {
      if (guitarraState.id === guitarra.id) oldRegister = index
    })
    if (oldRegister > -1) {
      const newCarrito = [...carrito]
      newCarrito[oldRegister] = guitarra
      setCarrito(newCarrito)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const newCarrito = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(newCarrito)
  }

  const eliminarGuitarra = (id) => {
    const newCarrito = carrito.filter(item => item.id !== id)
    setCarrito(newCarrito)
  }

  return (
    <Document>
      <Outlet context={{
        agregarCarrito,
        carrito,
        actualizarCantidad,
        eliminarGuitarra
      }} />
    </Document>
  )
}

export function meta() {
  return (
    {
      charset: 'uft-8',
      title: 'GuitarLa',
      viewport: 'width=device-width, initial-scale=1'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: "https://fonts.googleapis.com"
    },
    {
      rel: 'preconnect',
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// Manejo de errores

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Document>
          <h1 className='error'>
            {caught.status} {caught.statusText}
          </h1>

          <h3>Aqui no hay nada, no invente.</h3>
        </Document>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {

  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Document>
          <h1 className='error'>
            {error.status} {error.statusText}
          </h1>

          <h3>A ocurrido un error. ????</h3>
        </Document>
      </body>
    </html>
  );
}

