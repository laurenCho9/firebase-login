import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { useLogout } from "../hooks/useLogout";

const Nav = () => {
  const { logout } = useLogout();

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
        <li>
          <button type="button" onClick={logout}>
            로그아웃
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
