import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../images/logo2.png";
import AltLogin from "../shared/AltLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const loginBtn = (e) => {
    e.preventDefault();
    const email = e.target?.email?.value;
    const password = e.target?.password?.value;
    signInWithEmailAndPassword(email, password)
    console.log(email, password)
  };

  return (
    <section className="h-screen">
      <form onSubmit={loginBtn} className="w-2/6 m-auto pt-12 grid gap-6">
        <img src={logo2} className="h-16 mx-auto mb-4" alt="" />
        <AltLogin></AltLogin>
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          className="p-2 w-full rounded-md bg-gray-100"
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <input
          className="p-2 font-bold bg-red-500 rounded-md w-full hover:bg-red-600 active:bg-red-500 text-white"
          type="submit"
          value="Login"
        />
        <p
          onClick={() => navigate("/signup")}
          className="text-center text-red-600 cursor-pointer hover:underline"
        >
          Don't have a Account
        </p>
      </form>
    </section>
  );
};

export default Login;
