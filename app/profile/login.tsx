import React from "react";
import { useSIWE } from "connectkit";

const Login = () => {
  const { signIn } = useSIWE();
  return (
    <div>
      <p>Login first</p>
      <button onClick={signIn}>Login</button>
    </div>
  );
};

export default Login;
