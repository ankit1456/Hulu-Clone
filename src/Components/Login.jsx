import React from "react";
import "../CSS/login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../stateManagement/stateProvider";

const Login = () => {
  const [dispatch] = useStateValue();

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((userAuth) => {
        dispatch({
          type: "LOGIN",
          payload: userAuth.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://media.comicbook.com/2019/11/hulu-logo-1197973-1280x0.jpeg'
          alt=''
        />
        <p onClick={handleLogin}>Sign in with Google</p>
      </div>
    </div>
  );
};

export default Login;
