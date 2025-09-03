import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { server } from "../../bff";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { H2 } from "../../components/h2/h2";
import { Link } from "react-router-dom";

import styled from "styled-components";
/* Схема для валидации */

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(/^w+$/, "Неверно заполнен логин. Допускаются только буквы и цифры")
    .min(3, "Неверно заполнен логин. Минимальный размер 3 символа")
    .max(15, "Неверно заполнен логин. Максимальный размер 15 символа"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[w#%]+$/,
      "Неверно заполнен пароль. Допускаются только буквы и цифры"
    )
    .min(6, "Неверно заполнен пароль. Минимальный размер 6 символа")
    .max(20, "Неверно заполнен пароль. Максимальный размер 20 символа"),
});

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin: 20px 0;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  margin: 10px;
  padding: 10px;
  background-color: #fcadad;
`;

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
      }
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  return (
    <div className={className}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин... "
          {...register("login", { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Пароль... "
          {...register("password", { onChange: () => setServerError(null) })}
        />
        <Button type="submit" disabled={!!formError}>
          <H2>Авторизоваться</H2>
        </Button>{" "}
        <StyledLink to="/register">Регистрация</StyledLink>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
