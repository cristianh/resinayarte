/* eslint-disable react/prop-types */
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const ImagenProducto = ({url,descripcion}) => {
    return (
        <Zoom>
            <img className='shadow-lg' style={{ objectFit: 'cover',width:'100%' }} key={url} src={url} alt={descripcion} />
        </Zoom>

    )
}
