import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Bolg({ data }) {
  const { titulo, contenido, imagen, url, publishedAt } = data?.attributes
  return (
    <article className="post">
      <img src={imagen.data.attributes.formats.small.url} alt='blog' className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">Publicado: {formatDate(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/post/${url}`}>Leer Entrada</Link>
      </div>
    </article>
  )
}