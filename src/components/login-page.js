import React from "react";
import {LoginButton, LoginContainer, LoginForm, LoginTitle } from "../styles/login-page.styles";
import { Formik } from "formik";
import ValidationField from "./validation-field";
import { useHistory } from "react-router-dom";
import * as Yup from "yup"

const LoginPage = () => {
  let history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  const submit = (values) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");
  localStorage.setItem("isAuth", true);
  if ((username === values.username || email === values.username) && password === values.password) {
    history.push("/");
    history.go(0);
  }
  };

  return (
    <LoginContainer>
      <LoginTitle>Submit the form to log in</LoginTitle>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required")
            .test("test-name", "Include spaces", function (value) {
              return /\s/.test(value) ? false : true;
            }),
          password: Yup.string()
            .min(8, "Too Short!")
            .max(20, "Too Long!")
            .required("Required")
            .matches(/^(?!\s+$).+/g, "Invalid password")
            .test("test-name", "Include spaces", function (value) {
              return /\s/.test(value) ? false : true;
            })
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        })}
        onSubmit={submit}
      >
        {({ handleSubmit }) => (
          <LoginForm>
            <ValidationField label="Login/Email" name="username" type="text" placeholder='Enter your login or email' />
            <ValidationField label="Password" name="password" type="password" placeholder='Enter your password' />
            <LoginButton onClick={handleSubmit}>Submit</LoginButton>
            <p>
              Don't have an account?{" "}
              <span onClick={goToRegister}>Sign Up</span>
            </p>
          </LoginForm>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default LoginPage;