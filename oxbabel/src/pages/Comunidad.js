import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/contact.css';

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className='alert'>
      <span className='message'>{message}</span>
    </div>
  );
};

const Comunidad = () => {
  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    motivo: '',
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    motivo: Yup.string().required('El motivo de contacto es requerido'),
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Aquí puedes realizar acciones como enviar el formulario por correo electrónico o realizar una llamada a la API
    console.log(values);
    resetForm();
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className='page comunidad-page'>
      <h1 className='heading'>Contacto</h1>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='contact'>
          <div>
            <label htmlFor='nombre'>Nombre</label>
            <Field type='text' id='nombre' name='nombre' />
            <ErrorMessage name='nombre' component='div' className='error-message' />
          </div>

          <div>
            <label htmlFor='apellido'>Apellido</label>
            <Field type='text' id='apellido' name='apellido' />
            <ErrorMessage name='apellido' component='div' className='error-message' />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <Field type='text' id='email' name='email' />
            <ErrorMessage name='email' component='div' className='error-message' />
          </div>

          <div>
            <label htmlFor='motivo'>Motivo de contacto</label>
            <Field as='textarea' id='motivo' name='motivo' />
            <ErrorMessage name='motivo' component='div' className='error-message' />
          </div>

          <button type='submit'>Enviar</button>
        </Form>
      </Formik>

      {showAlert && (
        <Alert message='¡El formulario se envió correctamente!' onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default Comunidad;
