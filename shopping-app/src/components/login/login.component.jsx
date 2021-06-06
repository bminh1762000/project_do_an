import React, { useState, useContext } from "react";

import { UserContext } from "../../context/user";
import {
  LoginForm,
  FormControl,
  EmptyNotice,
  RegisterLink,
  SectionTitle,
  ButtonSubmit,
} from "./login.styles";
import { required, length, isEmail } from "../../utils/validators";

const Login = () => {
  const initialValue = {
    loginForm: {
      email: {
        valid: false,
        value: "",
        validator: [required, isEmail],
      },
      password: {
        valid: false,
        value: "",
        validator: [required, length({ min: 5 })],
      },
      username: {
        valid: false,
        value: "",
        validator: [required, length({ min: 3 })],
      },
    },
    isValidLoginForm: false,
    isValidSignUpForm: false,
  };
  const { userLogin } = useContext(UserContext);

  const [isMember, setIsMember] = useState(true);
  const [valueForm, setValueForm] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let isValid = true;
    for (const validator of valueForm.loginForm[name].validator) {
      isValid = isValid && validator(value);
    }
    const updatedForm = {
      ...valueForm.loginForm,
      [name]: {
        ...valueForm.loginForm[name],
        value: value,
        valid: isValid,
      },
    };
    let isLogin = false;
    let isSignUp = false;
    if (updatedForm.email.valid && updatedForm.password.valid) {
      isLogin = true;
    }
    if (
      updatedForm.email.valid &&
      updatedForm.password.valid &&
      updatedForm.username.valid
    ) {
      isSignUp = true;
    }
    setValueForm({
      loginForm: updatedForm,
      isValidLoginForm: isLogin,
      isValidSignUpForm: isSignUp,
    });
  };

  const logInHandle = (event) => {
    event.preventDefault();
    const {
      loginForm: { email, password },
    } = valueForm;
    fetch("http://localhost:8000/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setValueForm(initialValue);
        if (resData.error) {
          throw new Error(resData.error);
        }
        userLogin(resData);
      });
  };

  const signUpHandle = (event) => {
    event.preventDefault();
    const {
      loginForm: { email, password, username },
    } = valueForm;
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        username: username.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setValueForm(initialValue);
        if (resData.error) {
          throw new Error(resData.error);
        }
        logInHandle(event);
      });
  };
  return (
    <section className="form-section">
      <SectionTitle>{isMember ? "Sign in" : "Register"}</SectionTitle>
      <LoginForm onSubmit={isMember ? logInHandle : signUpHandle}>
        <FormControl>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={valueForm.loginForm.email.value}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={valueForm.loginForm.password.value}
          />
        </FormControl>
        {isMember ? null : (
          <FormControl>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={valueForm.loginForm.username.value}
            />
          </FormControl>
        )}
        {(!valueForm.isValidLoginForm && isMember) ||
        (!valueForm.isValidSignUpForm && !isMember) ? (
          <EmptyNotice>Please fill out all form fields</EmptyNotice>
        ) : (
          <ButtonSubmit type="submit">
            {isMember ? "Login" : "Register"}
          </ButtonSubmit>
        )}
        <RegisterLink>
          {isMember ? "Need to register" : "Already a member"}
          <button
            type="button"
            onClick={() => setIsMember((isMember) => !isMember)}
          >
            Click here
          </button>
        </RegisterLink>
      </LoginForm>
    </section>
  );
};

export default Login;
