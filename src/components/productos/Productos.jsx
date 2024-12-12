//import images from '../../data/images_dev.json'
import images from '../../data/images.json'
import "./productos.css"

import { ImagenProducto } from '../../components/productos/ImagenProducto'

export const Productos = () => {

    const formatCurrency = (value) => {
        // Convertir el valor a un número y verificar si es válido
        const number = parseInt(value, 10);
        if (isNaN(number)) {
            throw new Error("El valor proporcionado no es un número válido.");
        }

        // Formatear el número con separadores de miles y añadir el símbolo de moneda
        return `$ ${number.toLocaleString('es-AR')}`;
    };

    return (
        <>
            <div className="container">
                <br />
                <h1>Productos</h1>
                <hr />
                <div className='d-flex justify-content-between align-items-center' >
                    <div className='row row-cols-4' >
                        {
                            images.map((imagen) => {
                                const {id, name, descripcion, precio } = imagen

                                return (
                                    <>
                                        <div  key={`producto-${id}`} className="col-12 col-lg-* col-md-12 col-xs-12 col-xl-3 mt-4" >
                                            <div className="card" id="card">
                                                <ImagenProducto key={`producto-image-${id}`}  {...imagen} />
                                                <div className="card-body"  >
                                                    <div>
                                                        <h3 className='mr-6'>{name}</h3>
                                                        <div style={{ "height": "100px" }}>
                                                            <p className="card-text">{descripcion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div>
                                                            <a href={`https://wa.me/3015014539?text=Hola me interesa este producto  ${name}`} target="_blank" className="btn btn-outline-info align-middle">COMPRAR</a>
                                                        </div>
                                                        <div>
                                                            <span className='user-select-all producto__precio'>{formatCurrency(precio)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
            </div>
        </>
    )
}
