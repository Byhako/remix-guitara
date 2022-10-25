export async function getguitarras() {
  try {
    const response = await fetch('http://localhost:1337/api/guitarras?populate=imagen')
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error obtienido lista de guitarras. ', error)
    return []
  }
}

export async function getguitarra(nombre) {
  try {
    const response = await fetch(`http://localhost:1337/api/guitarras?filters[url]=${nombre}&populate=imagen`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error obteniendo guitarra. ', error)
    return {}
  }
}
