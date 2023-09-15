import React, { useRef, useState } from "react";
import { signIn } from "../redux/actions/userActions.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((input) => !input.current.value)) {
      alert("All fields are required");
      return;
    }

    const body = {
      email: email.current.value,
      password: password.current.value,
    };

    const response = await dispatch(signIn(body));

    if (response.payload.success) {
      // alert("Welcome " + response.payload.user.name);
      toast("Welcome " + response.payload.user.name, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/");
    } else {
      setErrorMessage("Incorrect email or password. Try Again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Log In</h2>
        <div className="flex items-center justify-center">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const infoUser = jwtDecode(credentialResponse.credential);
                const userData = {
                  email: infoUser.email,
                  password: "Go" + infoUser.sub.substring(0, 8),
                };

                // Dispatch the signIn action with the user's data
                dispatch(signIn(userData)).then((response) => {
                  if (response.payload.success) {
                    // alert("Welcome " + response.payload.user.name);
                    toast("Welcome " + response.payload.user.name, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                    navigate("/");
                  } else {
                    setErrorMessage("Incorrect email or password. Try Again");
                  }
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 m-3">OR</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={email}
              className="mt-1 block w-full border rounded-md p-2 text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={password}
              className="mt-1 block w-full border rounded-md p-2 text-gray-600"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-md"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
