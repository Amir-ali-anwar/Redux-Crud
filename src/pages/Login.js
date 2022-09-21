import React from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useNavigate } from "react-router-dom";
import { Button, FormRow } from "../components";
import { addUserToLocalStorage } from "../utils/localStorage";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  SetValues({ ...values, [name]: value });
  };
  return (
    <Wrapper className="full-page">
      <form className="form">
        <h3>Login </h3>
        <FormRow
          name="email"
          labelText="Email"
          type="email"
          className="form-input"
          labelClass="form-label"
          handleChange={inputhandler}
        />
        <FormRow
          name="password"
          labelText="Password"
          type="password"
          className="form-input"
          labelClass="form-label"
          handleChange={inputhandler}
        />
        <Button
          type="submit"
          className={["btn btn-block"]}
        >
          {" "}
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default Login;
