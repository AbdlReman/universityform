// Todo.jsx
import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    address: "",
    cnic: "",
    email: "",
    phonenumber: "",
    age: "",
    city: "",
    course: "",
  });

  const [todosList, setTodosList] = useState([]);

  const {
    firstname,
    lastname,
    fathername,
    address,
    cnic,
    email,
    phonenumber,
    age,
    city,
    course,
  } = data;

  const handleClick = (e) => {
    e.preventDefault();
    // Create a new todo object with the entered data
    const newTodo = {
      firstname,
      lastname,
      fathername,
      address,
      cnic,
      email,
      phonenumber,
      age,
      city,
      course,
    };
    // Add the new todo to the todosList
    setTodosList([newTodo]);
    // Reset input fields after adding todo
    setData({
      firstname: "",
      lastname: "",
      fathername: "",
      address: "",
      cnic: "",
      email: "",
      phonenumber: "",
      age: "",
      city: "",
      course: "",
    });
  };

  const handleChange = (e) => {
    //
    setData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-4">
        <h1 className="display-4">Admision Form</h1>
        <form>
          <label htmlFor="">First Name</label>
          <input
            name="firstname"
            value={firstname}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter your first name..."
          />
          <label htmlFor="">Last Name</label>
          <input
            name="lastname"
            value={lastname}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter your last  name..."
          />
          <label htmlFor="">Father Name</label>
          <input
            name="fathername"
            value={fathername}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter your father  name..."
          />
          <label htmlFor="">Address</label>
          <input
            name="address"
            value={address}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter addrerss..."
          />
          <label htmlFor="">CNIC</label>
          <input
            name="cnic"
            value={cnic}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter Cnic..."
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            type="email"
            placeholder="enter email..."
          />
          <label htmlFor="">Phone Number</label>
          <input
            name="phonenumber"
            value={phonenumber}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter phone number..."
          />
          <label htmlFor="">Age</label>
          <input
            name="age"
            value={age}
            onChange={handleChange}
            className="form-control"
            type="number"
            placeholder="enter your age..."
          />
          <label htmlFor="">City</label>
          <input
            name="city"
            value={city}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter city..."
          />
          <label htmlFor="">Course</label>
          <input
            name="course"
            value={course}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter course name..."
          />

          <button onClick={handleClick} className="btn btn-dark my-1 w-100">
            Add todo
          </button>
        </form>
      </div>

      <div className="container col-lg-5 mx-auto  p-4">
        <ul>
          {todosList.map((todoItem, index) => (
            <li key={index}>
              <strong>First Name:</strong> {todoItem.firstname},{" "}
              <strong>last Name:</strong> {todoItem.lastname},{" "}
              <strong>Father Name:</strong> {todoItem.fathername},{" "}
              <strong>Address:</strong> {todoItem.address}{" "}
              <strong>Cnic:</strong> {todoItem.cnic}, <strong>Email:</strong>{" "}
              {todoItem.email}, <strong>Phone number:</strong>{" "}
              {todoItem.phonenumber},<strong>Age:</strong> {todoItem.age},{" "}
              <strong>City:</strong> {todoItem.city}, <strong>course:</strong>{" "}
              {todoItem.course},
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
