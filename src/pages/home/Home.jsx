import DiaryForm from "./DiaryForm";
import styles from "./home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryForm uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>목록</ul>
    </main>
  );
};
export default Home;
