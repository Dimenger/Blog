import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { server } from "../../bff";
import styled from "styled-components";

/* Схема для валидации */

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required()
    .matches(/^w+$/, "Неверно заполнен логин. Допускаются только буквы и цифры")
    .min(3, "Неверно заполнен логин. Минимальный размер 3 символа")
    .max(15, "Неверно заполнен логин. Максимальный размер 15 символа"),
  password: yup
    .string()
    .matches(
      /^[w#%]+$/,
      "Неверно заполнен пароль. Допускаются только буквы и цифры"
    )
    .min(6, "Неверно заполнен пароль. Минимальный размер 6 символа")
    .max(20, "Неверно заполнен пароль. Максимальный размер 20 символа"),
});

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

  const [serverError, setServerError] = useState();

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
        <input type="text" placeholder="Логин... " {...register("login")} />
        <input
          type="password"
          placeholder="Пароль... "
          {...register("password")}
        />
        <button type="submit" disabled={!!formError}>
          Войти
        </button>
        {errorMessage && <div>{errorMessage}</div>}
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
  }
`;
