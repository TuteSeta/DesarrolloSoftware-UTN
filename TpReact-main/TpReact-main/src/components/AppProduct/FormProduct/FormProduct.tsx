import { FC, useState } from 'react'
import { Button, Form, FormLabel } from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm'

interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const [exploded, setExploded] = useState(false);
    const { handleChange, values, resetForm } = useForm({
        nombre: '',
        imagen: '',
        precio: 0,
    })


    const handleSubmitForm = () => {
        setExploded(true); // Iniciar animación de explosión
        setTimeout(() => {
          setExploded(false); // Reiniciar estado
          handleAddProduct(values);
          resetForm();
        }, 700); // Duración total de la animación
    };

    return (
        <Form className='p-4 border rounded m-3'>
            <Form.Group controlId='formNombre'>
                <FormLabel>Nombre</FormLabel>
                <Form.Control
                    type="text"
                    name='nombre'
                    placeholder="Ingrese nombre producto"
                    value={values.nombre}
                    onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId='formImagen'>
                <FormLabel>Imagen</FormLabel>
                <Form.Control
                    type="text"
                    name='imagen'
                    placeholder="Ingrese imagen del producto"
                    value={values.imagen}
                    onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId='formPrecio'>
                <FormLabel>Precio</FormLabel>
                <Form.Control
                    type="number"
                    name='precio'
                    placeholder="Ingrese precio del producto"
                    value={values.precio}
                    onChange={handleChange} />
            </Form.Group>
            <div className='d-flex justify-content-center mt-4'>
                <Button onClick={handleSubmitForm} variant='primary' 
                className={`enviar-button ${exploded ? 'explode' : ''}`}>
                    Enviar Producto
                </Button>
                
            </div>
        </Form>
    )
}
