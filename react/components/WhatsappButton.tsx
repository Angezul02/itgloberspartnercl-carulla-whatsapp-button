import React from 'react'
import propTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')
  // console.log(formattedMessage);

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="logo de whatsapp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  message: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3004507575',
  message: 'Estas comunicandote con la linea carulla',
  width: 50,
  height: 50,
}

WhatsappButton.schema = {
  title: 'Botón de Whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de Whatsapp relacionado con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono contacto Whatsapp',
      description: 'Agrega por favor el numero de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Medida',
      description: 'Agrega por favor el mensaje para tu cliente',
      type: 'number',
    },

    height: {
      title: 'Medida',
      description: 'Agrega por favor el mensaje para tu cliente',
      type: 'number',
    },
  },
}
export default WhatsappButton
