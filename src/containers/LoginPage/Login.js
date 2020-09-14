import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import "./Login.scss";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignUp] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [formState, setFormState] = useState({});
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const handleLogin = async (data, event) => {
    event.preventDefault();

    try {
      await Auth.signIn(formState.username, formState.password);
      window.location.href = "/home";
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async (data, event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const newUser = await Auth.signUp({
        username: formState.username,
        password: formState.password,
        attributes: {
          email: formState.email,
          name: formState.name,
          preferred_username: formState.username,
        },
      });
      setIsSignUp(false);
      setIsValidate(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleConfirmation = async (event) => {
    console.log(formState.code);
    event.preventDefault();

    try {
      await Auth.confirmSignUp(formState.username, formState.code);
      await Auth.signIn(formState.username, formState.password);
      window.location.href = "/home";
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-body">
      <div style={{ float: "left", width: "50%" }}>
        <div className="main">
          <div style={{ float: "left", width: "30%", marginLeft: "20%" }}>
            <button
              className="sign"
              align="center"
              onClick={() => {
                setIsLogin(true);
                setIsSignUp(false);
              }}
            >
              Log In
            </button>
          </div>
          <div style={{ float: "left", width: "30%" }}>
            <button
              className="sign"
              align="center"
              onClick={() => {
                setIsLogin(false);
                setIsSignUp(true);
              }}
            >
              Sign Up
            </button>
          </div>
          {isLogin && (
            <form key={1} onSubmit={handleSubmit(handleLogin)}>
              <input
                id="username"
                className="un "
                type="text"
                align="center"
                placeholder="Username"
                name="username"
                ref={register({ required: true })}
                onChange={handleChange}
              />
              {errors.name && <p className="error">Required</p>}
              <input
                id="password"
                className="pass"
                type="password"
                align="center"
                placeholder="Password"
                name="password"
                ref={register({ required: true })}
                onChange={handleChange}
              />
              {errors.name && <p className="error">Required</p>}
              <button className="submit" type="submit" align="center">
                Sign in
              </button>
            </form>
          )}

          {isSignup && (
            <form key={2} onSubmit={handleSubmit2(handleSignUp)}>
              <input
                id="name"
                className="un "
                type="text"
                align="center"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                ref={register2({ required: true })}
              />
              {errors2.name && <p className="error">Required</p>}
              <input
                id="username"
                className="un "
                type="text"
                align="center"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                ref={register2({ required: true })}
              />
              {errors2.name && <p className="error">Required</p>}
              <input
                id="email"
                className="un "
                type="text"
                align="center"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                ref={register2({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors2.email && <p className="error">Invalid email address</p>}
              <input
                id="password"
                className="un "
                type="text"
                align="center"
                placeholder="Password"
                type="password"
                onChange={handleChange}
                name="password"
                ref={register2({ required: true })}
              />
              {errors2.name && <p className="error">Required</p>}
              <button className="submit" type="submit" align="center">
                Sign Up
              </button>
            </form>
          )}

          {isValidate && (
            <form onSubmit={handleConfirmation}>
              <input
                type="submit"
                className="un "
                type="text"
                align="center"
                onChange={handleChange}
                placeholder="Confirmation Code"
                name="code"
              />
              <p style={{ color: "white", marginTop: 6 }}>
                Please check your email for the confirmation code.
              </p>
              <button className="submit" type="submit" align="center">
                Confirm
              </button>
            </form>
          )}
        </div>
      </div>
      <div style={{ float: "right", width: "50%", marginTop: "17%" }}>
        <h1
          style={{
            fontWeight: "400",
            fontSize: "96px",
            color: "white",
          }}
        >
          Workout Party
        </h1>
      </div>
    </div>
  );
};

export default Login;
