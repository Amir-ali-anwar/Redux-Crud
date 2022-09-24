import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Button, FormRow, Alert } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../reducers/todoaction";
const initialState = {
  name: "",
  position: "",
};
const AddTodo = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, SetValues] = React.useState(initialState);
  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({ ...values, [name]: value });
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("values", values);
    dispatch(addTodo(values));
     navigate("/all-Todo");
  }
  return (
    <>
      <Wrapper>
        <form className="form" onSubmit={submitHandler}>
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
