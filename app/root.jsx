import { Meta, Links, Outlet, useCatch, Scripts, LiveReload } from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'

export default function App() {
  return (
    <Document>
      <Outlet />
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
        <h1>
          {caught.status} {caught.statusText}
        </h1>

        <h3>Aqui no hay nada, no invente.</h3>
      </body>
    </html>
  );
}