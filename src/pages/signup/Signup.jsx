import { useState } from "react";
import styles from "./signup.module.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  // displayName는 firebase속성명
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleData = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "text") {
      setDisplayName(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    // 페이지리로딩 제어
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>
        {/* email */}
        <label htmlFor="myEmail">email: </label>
        <input
          type="email"
          id="myEmail"
          value={email}
          onChange={handleData}
          required
        />
        {/* nickname */}
        <label htmlFor="myNickname">닉네임: </label>
        <input
          type="text"
          id="myNickname"
          value={displayName}
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
          회원가입
        </button>
      </fieldset>
    </form>
  );
};
export default Signup;
