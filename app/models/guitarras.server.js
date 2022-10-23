export async function getguitarras() {
  const response = await fetch('http://localhost:1337/api/guitarras?populate=image')
  const result = await response.json()
  return result
}