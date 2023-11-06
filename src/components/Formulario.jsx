import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Formulario = ({ setError }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password1: "",
    password2: "",
  });

  const validarDatos = (e) => {
    e.preventDefault();
    const { nombre, email, password1, password2 } = formData;
    const validarDatos = !nombre || !email || !password1 || !password2;
    const validarPassword = password1 !== password2;

    // console.log(password1)
    // console.log(password2)

    validarDatos
      ? setError({
          error: true,
          msg: "Completa todos los campos",
          color: "warning",
        })
      : setError({
          error: false,
          msg: "Registro exitoso",
          color: "success",
        });

    validarPassword
      ? setError({
          error: true,
          msg: "Contraseñas No Coinciden",
          color: "danger",
        })
      : null;


    //esto es para resetear los valores a vacio
    setFormData({
      nombre: "",
      email: "",
      password1: "",
      password2: "",
    });
  };

  const handleChange = (e) => {
     const {name, value} = e.target
     setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* <Card body className="tarjeta-login"> */}
      <Form onSubmit={(e) => validarDatos(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nombre"
            onChange={handleChange}
            value={formData.nombre}
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}            
            placeholder="nombre@email.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password1"   
            onChange={handleChange}
            value={formData.password1}           
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password2"
            onChange={handleChange}
            value={formData.password2}   
            placeholder="Repita su password"
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Registrar
        </Button>
      </Form>
      {/* </Card> */}
    </>
  );
};
