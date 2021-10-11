import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginSliceActions } from "../store/store";
import { useLayoutEffect, useState } from "react";
import { fetchApi } from "../api";

const test = {
  ops: [
    {
      type: "create",
      obj: "task",
      conv_id: 986230,
      ref: "111",
      data: {
        param: 1,
      },
    },
  ],
};

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  useLayoutEffect(() => {
    fetchApi(JSON.stringify(test));
  }, []);

  const dispatch = useDispatch();

  const emailValue = (e) => {
    setEmailInput(e.target.value);
  };

  const passValue = (e) => {
    setPassInput(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (emailInput === "" || passInput === "") return;
    dispatch(loginSliceActions.login());
  };

  return (
    <main className={classes.auth}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor="text">Email</label>
          <input type="text" id="email" onChange={emailValue} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={passValue} />
        </div>
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
