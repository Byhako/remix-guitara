
export default function App() {

  return (
    <Document>
      <h1>Mira mi yuca.</h1>
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <title>GutarLa</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}