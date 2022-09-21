import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Button, FormRow, Alert } from "../components";
import customFetch from "../utils/axios";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  position: "",
};
const AddTodo = () => {
  const navigate = useNavigate();
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  return (
    <>
      <Wrapper>
        <form className="form">
          <h3>Add user</h3>
          <div className="form-center">
            <FormRow
              name="name"
              labelText="Name"
              className="form-input"
              labelClass="form-label"
              value={values.name}
              handleChange={inputhandler}
            />
            <FormRow
              name="position"
              labelText="Position"
              className="form-input"
              labelClass="form-label"
              value={values.position}
              handleChange={inputhandler}
            />
            <div className="btn-container">
              <Button type="submit" className="btn btn-block submit-btn">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default AddTodo;
