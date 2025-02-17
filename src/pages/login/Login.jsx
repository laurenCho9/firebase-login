import { useState } from "react";
import styles from "./login.module.css";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

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
    login(email, password);
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

        {!isPending && (
          <button type="submit" className={styles.button}>
            로그인
          </button>
        )}
        {isPending && <strong>로그인 진행중입니다...</strong>}
        {error && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
};
export default Login;
