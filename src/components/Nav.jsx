import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>비밀일기</h1>
      <ul className={styles.list_nav}>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
