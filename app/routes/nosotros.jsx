import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export default function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='img' />

        <div>
          <p>
            Metus aliquam eleifend mi in nulla posuere sollicitudin. In arcu cursus euismod
            quis. Amet luctus venenatis lectus magna. Nulla facilisi cras fermentum odio eu.
            Volutpat sed cras ornare arcu dui vivamus. Eu facilisis sed odio morbi quis
            commodo odio aenean. Purus ut faucibus pulvinar elementum. Tincidunt ornare
            massa eget egestas purus viverra. Ipsum dolor sit amet consectetur adipiscing
          </p>
          <p>
            Metus aliquam eleifend mi in nulla posuere sollicitudin. In arcu cursus euismod
            quis. Amet luctus venenatis lectus magna. Nulla facilisi cras fermentum odio eu.
            Volutpat sed cras ornare arcu dui vivamus. Eu facilisis sed odio morbi quis
            commodo odio aenean. Purus ut faucibus pulvinar elementum. Tincidunt ornare
            massa eget egestas purus viverra. Ipsum dolor sit amet consectetur adipiscing
          </p>
        </div>
      </div>
    </main>
  )
}

export function meta() {
  return (
    {
      charset: 'uft-8',
      title: 'GuitarLa - Nosotros',
      description: 'venta de guitarras',
      viewport: 'width=device-width, initial-scale=1'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
