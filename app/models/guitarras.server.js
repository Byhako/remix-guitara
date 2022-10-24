export async function getguitarras() {
  const response = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
  const result = await response.json()
  return result
}

export async function getguitarra(nombre) {
  const response = await fetch(`http://localhost:1337/api/guitarras?filters[url]=${nombre}&populate=imagen`)
  const result = await response.json()
  return result
}
