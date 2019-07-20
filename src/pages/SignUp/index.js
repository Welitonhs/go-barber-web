import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .min(8, 'Senha deve ter no mínimo 8 caracteres.')
      .required('Senha é obrigatória.'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
