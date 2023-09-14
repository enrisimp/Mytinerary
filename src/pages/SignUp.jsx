import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signUp } from "../redux/actions/userActions.js";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
// import GoogleLoginButton  from

const SignUp = () => {
  const [countries, setCountries] = useState([]);

  const name = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const image = useRef(null);
  const country = useRef(null);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const aux = [name, email, password, image, country];
  //   if (aux.some((campo) => !campo.current.value)) {
  //     alert("Todos los campos son obligatorios");
  //   } else {
  //     const body = {
  //       name: name.current.value,
  //       lastname: lastname.current.value,
  //       email: email.current.value,
  //       image: image.current.value,
  //       password: password.current.value,
  //       country: country.current.value,
  //     };
  //     dispatch(signUp(body));
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [name, lastname, email, password, image, country];
    if (aux.some((campo) => !campo.current.value)) {
      alert("Todos los campos son obligatorios");
    } else {
      const body = {
        name: name.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        image: image.current.value,
        password: password.current.value,
        country: country.current.value,
      };

      
      console.log("Form Data:", body); // Log the form data being submitted
      dispatch(signUp(body))
        .then((response) => {
          console.log("Sign Up Response:", response); // Log the response from the backend
          if (response.payload && response.payload.success) {
            // Handle success
            navigate("/");
          } else {
            // Handle error, if any
            // You can also display an error message here
            console.error("Sign Up Error:", response.payload.error);
          }
        })
        .catch((error) => {
          // Handle any exceptions or network errors here
          console.error("Sign Up Error:", error);
        });
    }
  };

// const handleSubmitGoogle = async (credentialResponse) => {
//   try {
//     const infoUser = jwtDecode(credentialResponse.credential);
//     const userData = {
//       email: infoUser.email,
//       name: infoUser.given_name,
//       lastname: infoUser.family_name,
//       image: infoUser.picture,
//       password: infoUser.family_name + "_" + infoUser.sub,
//       country: "Argentina", // You can set a default country here
//     };
//     await dispatch(signUp(userData));
//     navigate("/");
//   } catch (error) {
//     console.error("Error while signing up with Google:", error);
//   }
  // };
  
  const handleSubmitGoogle = async (credentialResponse) => {
    try {
      const infoUser = jwtDecode(credentialResponse.credential);
      const userData = {
        email: infoUser.email,
        name: infoUser.given_name,
        lastname: infoUser.family_name,
        image: infoUser.picture,
        password:"Go" + infoUser.sub.substring(0, 8),
        country: "Argentina", // You can set a default country here
      };
      console.log("Google Sign Up Data:", userData); // Log the Google Sign Up data being submitted
      await dispatch(signUp(userData))
        .then((response) => {
          console.log("Google Sign Up Response:", response); // Log the response from the backend
          if (response.payload && response.payload.success) {
            // Handle success
            navigate("/");
          } else {
            // Handle error, if any
            // You can also display an error message here
            console.error("Google Sign Up Error:", response.payload.error);
          }
        })
        .catch((error) => {
          // Handle any exceptions or network errors here
          console.error("Google Sign Up Error:", error);
        });
    } catch (error) {
      console.error("Error while signing up with Google:", error);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <GoogleLogin
          onSuccess={handleSubmitGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* <GoogleLoginButton fn={handleSubmitGoogle} /> */}
      </GoogleOAuthProvider>
      <form
        className="mt-4 p-4 mx-auto max-w-sm bg-gray-200 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            name="name"
            ref={name}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Lastname</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            name="lastname"
            ref={lastname}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            name="email"
            ref={email}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            name="password"
            ref={password}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Image</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            name="image"
            ref={image}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Country</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            name="country"
            ref={country}
          >
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
