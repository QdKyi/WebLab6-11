import React from "react";
import { RegisterButton, RegisterContainer, RegisterForm, RegisterTitle } from "../styles/register-page-styles";
import { Formik } from "formik";
import * as Yup from "yup"
import ValidationField from "./validation-field";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  let history = useHistory();

  const goToLogIn = () => {
    history.push("/login");
  };

  const submit = (values) => {
    localStorage.setItem("username", values["username"]);
    localStorage.setItem("email", values["email"]);
    localStorage.setItem("password", values["password"]);
    localStorage.setItem("isAuth", false);
    history.push("/login");
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Register the new account</RegisterTitle>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(2, "Too Short!")
            .max(30, "Too Long!")
            .required("Required")
            .test("test-name", "Include spaces", function (value) {
              return /\s/.test(value) ? false : true;
            }),
        
          email: Yup.string().email("Invalid email").required("Required"),
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
            confirmPassword: Yup.string()
            .min(8, "Too Short!")
            .max(20, "Too Long!")
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords doesnt match"),
        })}
        onSubmit={submit}
      >
        {({ handleSubmit }) => (
          <>
          <RegisterForm>
            <ValidationField label="Login" name="username" type="text" placeholder='Enter your login' />
            <ValidationField label="Email" name="email" type="email" placeholder='Enter your email' />
            <ValidationField label="Password" name="password" type="password" placeholder='Enter your password' />
            <ValidationField label="Confirm Password" name="confirmPassword" type="password" placeholder='Enter your password once more' />
          </RegisterForm>
          <RegisterButton onClick={handleSubmit}>Register</RegisterButton>
          <p>
            Already have an account? 
            <span onClick={goToLogIn}>Sign In</span>
          </p>
          </>
        )}
      </Formik>
    </RegisterContainer>
  );
};

export default RegisterPage;