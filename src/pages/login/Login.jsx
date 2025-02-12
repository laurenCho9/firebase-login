import { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    // 페이지리로딩 제어
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>
        {/* email */}
        <label htmlFor="myEmail">email: </label>
        <input
          type="email"
          id="myEmail"
          value={email}
          onChange={handleData}
          required
        />
        {/* password */}
        <label htmlFor="myPassword">password: </label>
        <input
          type="password"
          id="myPassword"
          value={password}
          onChange={handleData}
          required
        />

        <button type="submit" className={styles.button}>
          로그인
        </button>
      </fieldset>
    </form>
  );
};
export default Login;
