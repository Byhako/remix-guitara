export async function getCursos() {
  try {
    const response = await fetch('http://localhost:1337/api/curso?populate=imagen')
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error obtienido los cursos ', error)
    return {}
  }
}