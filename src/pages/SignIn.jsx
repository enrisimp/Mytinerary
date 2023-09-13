import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../redux/actions/userActions.js";

const SignIn = () => {
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const aux = { email, password };
    if (aux.some((campo) => !campo.current.value)) {
      alert("todos los campos son obligatorios");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      // console.log(body);

      dispatch(signIn(body))
        // .then((response) => console.log(response))
        .then((response) => {
          if (response.payload.sucess) {
            alert("Welcome" + response.payload.user.name);
            navigate("/");
          }
        });
    }
  };

  return (
    <div className="d-flex col-1@ justify-center items-center">
      <form
        className="d-flex flex-column gap-5 bg-gray-200 p-5"
        onSubmit={handleSubmit}
      >
        <label>
          {" "}
          email
          <input type="email" name="" ref={email} />
        </label>
        <label>
          {" "}
          password
          <input type="password" name="" ref={password} />
        </label>
      </form>
    </div>
  );
};

export default SignIn;
