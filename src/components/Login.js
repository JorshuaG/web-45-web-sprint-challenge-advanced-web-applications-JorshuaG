import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });
  const [err, setErr] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setState({
      credentials: { ...state.credentials, [e.target.name]: e.target.value },
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((error) => {
        console.log("Login Axios catch", error);

        setErr(error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={state.username}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
              value={state.password}
            ></input>
          </label>
          <button id="submit">Login</button>
        </form>
      </div>

      {err && (
        <p id="error" className="error">
          {"Incorrect Username or Password"}
        </p>
      )}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
