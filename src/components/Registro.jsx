import React from "react";
import { Formulario } from "./Formulario";
import { SocialButton } from "./SocialButton";
import { Alert } from "./Alert";
import Card from "react-bootstrap/Card";

export const Registro = ({ error, setError }) => {
  return (
    <>
      <Card body className="tarjeta-login">
        <h2 className="mb-2">Crea una cuenta</h2>
        <SocialButton
          github={"github"}
          facebook={"facebook"}
          discord={"discord"}
        />
        <p>o registra tu email...</p>
        <Formulario error={error} setError={setError} />
        <Alert error={error.error} msg={error.msg} color={error.color} />
      </Card>
    </>
  );
};
