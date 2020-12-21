import styled from "styled-components";
import { Form } from "formik";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
  width: 900px;
  margin-bottom: 20px;
`

export const LoginTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  p {
    --font-family-sans-serif: "Nunito Sans";
    font-size: 14px;
    color: #020243;
    text-align: center;
    width: 300px;
    letter-spacing: 5px;
    padding: 5px 0;
    margin: 0;
    font-weight: 400;
  }
  span {
    cursor: pointer;
    color: #474543;
    text-decoration: underline;
    font-weight: 600;
  }
`

export const LoginButton = styled.button`
  width: 180px;
  height: 50px;
  font-size: 32px;
  font-weight: 700;
  border: 3px solid black;
  background-color: white;
`