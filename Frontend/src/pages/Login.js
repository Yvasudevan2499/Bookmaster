import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Username:</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
      <br></br>
      <a href="/forgotpassword">Forgot Password?</a>
    </form>
  );
};

export default Login;
