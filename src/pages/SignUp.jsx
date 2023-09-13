import React, {
  useRef, 
  useEffect,
   useState
   } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { signUp } from "../redux/actions/userActions.js";
const SignUp = () => {
  const [countries, setCountries] = useState([]);

  const name = useRef(null);
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
  // const handleSignUp = async () => {
  //   dispatch(
  //     register({
  //       username: username.current.value,
  //       password: password.current.value,
  //       name: name.current.value,
  //     })
  //   );
  //   navigate("/signin");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // if (!name.current.value) {
    //   alert("el Nombre es requerido");
    // }
    const aux = { name, email, password, image, country }
    if (aux.some(campo => !campo.current.value)) {
      alert("todos los campos son obligatorios")
    }
    else {
      const body = {
        name: name.current.value,
        email: email.current.value,
        image: image.current.value,
        password: password.current.value,
        country: country.current.value,
      }
      // console.log(body);
      dispatch(signUp(body));
    }  

    
  }

  return (
    //     <div className="w-full flex justify-center items-center h-[80vh]">
    //       <div className="form">
    //         <div className="title">Welcome</div>
    //         <div className="subtitle">Let's create your account!</div>

    //         <div className="input-container ic1">
    //           <input
    //             ref={username}
    //             placeholder=""
    //             type="text"
    //             className="input"
    //             id="firstname"
    //           />
    //           <div className="cut"></div>
    //           <label className="iLabel" htmlFor="firstname">
    //             Username
    //           </label>
    //         </div>

    //         <div className="input-container ic2">
    //           <input
    //             ref={password}
    //             placeholder=""
    //             type="text"
    //             className="input"
    //             id="lastname"
    //           />
    //           <div className="cut"></div>
    //           <label className="iLabel" htmlFor="lastname">
    //             Password
    //           </label>
    //         </div>
    //         <div className="input-container ic2">
    //           <input
    //             ref={name}
    //             placeholder=""
    //             type="text"
    //             className="input"
    //             id="email"
    //           />
    //           <div className="cut cut-short"></div>
    //           <label className="iLabel" htmlFor="email">
    //             Name
    //           </label>
    //         </div>
    //         <button className="submit" type="text" onClick={handleSignUp}>
    //           Sign up
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };
    <div className="d-flex col-1@ justify-center items-center">
      <form
        className="d-flex flex-column gap-5 bg-gray-200 p-5"
        onSubmit={handleSubmit}
      >
        <label>
          {" "}
          Name
          <input type="text" name="" ref={name} required />
        </label>
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
        <label>
          {" "}
          Image
          <input type="text" name="" ref={image} />
        </label>
        <label>
          {" "}
          Country
          <select name="country" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-$`} value={country}>
                  {" "}
                  {country}{" "}
                </option>
              ))}
          </select>
        </label>
      </form>
    </div>
  );
  };


export default SignUp;
