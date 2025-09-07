import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { server } from "../../bff";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { AuthFormError } from "../../components/auth-form-error/auth-form-error";
import { H2 } from "../../components/h2/h2";
import { Navigate } from "react-router-dom";
import { setUser } from "../../action";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import { useResetForm } from "../../hooks";

import styled from "styled-components";

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы и цифры"
    )
    .min(3, "Неверно заполнен логин. Минимальный размер 3 символа")
    .max(15, "Неверно заполнен логин. Максимальный размер 15 символа"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются только буквы и цифры"
    )
    .min(6, "Неверно заполнен пароль. Минимальный размер 6 символа")
    .max(20, "Неверно заполнен пароль. Максимальный размер 20 символа"),
  passcheck: yup
    .string()
    .required("Заполните повтор пароль")
    .oneOf([yup.ref("password"), null], "Повтор пароля не совпадает"),
});

const RegistrationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(regFormSchema),
  });

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }
      dispatch(setUser(res));
    });
  };

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин... "
          {...register("login", { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Пароля... "
          {...register("password", { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Проверка пароля... "
          {...register("passcheck", { onChange: () => setServerError(null) })}
        />
        <Button type="submit" disabled={!!formError}>
          <H2>Зарегистрироваться</H2>
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
