export async function getBlogs() {
  try {
    const response = await fetch('http://localhost:1337/api/blogs?populate=imagen')
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error obtienido lista de Blogs ', error)
    return {}
  }
}

export async function getBlog(url) {
  try {
    const response = await fetch(`http://localhost:1337/api/blogs?filters[url]=${url}&populate=imagen`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error obteniendo blog. ', error)
    return {}
  }
}
