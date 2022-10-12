import React, { useState, useEffect } from "react";
import ShowResults from "./ShowResults";

import {BrowserRouter, Link } from "react-router-dom";
import Header from "./Header";




 const UserInput = () => {
  const [state, setState] = useState({
    name: ""
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setIsSubmitted(false);
    setState({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && state.name.length > 0) {
      fetch(`https://api.tvmaze.com/search/shows?q=${state.name}`)
        .then((response) => {
          if (response.ok) {
            console.log("reponse ok", response.ok);
            return response.json();
          } else {
            console.log("response status", response.status);
            throw new Error(response.status);
          }
        })
        .then((json) => {
          console.log(json);
          setError(null);
          setData(json);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
      setState({ name: "" });
    }
    console.log("isSubmitted", isSubmitted);
  }, [isSubmitted, state.name]);

  

  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <img src="/src/assets/tvm-header-logo.png" />
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item d-flex justify-content-end mx-5">
          {/* <BrowserRouter> */}
        <Link to="/"  className='nav-link text-white' aria-current='page'>
                Home
              </Link>
          {/* </BrowserRouter> */}
        </li>
        </ul>
  </div>
      <form onSubmit={handleSubmit} className=" d-flex me-5">
        <input
          type="name"
          onChange={handleChange}
          value={state.name}
          className="input"
          />
        <button type="submit" className="submit-button btn btn-primary">
          Buscar
        </button>
      </form>
          </nav>
        { <ShowResults data={data} error={error} /> }
         
    </div>
  );
}
export default UserInput
