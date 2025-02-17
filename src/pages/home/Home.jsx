import DiaryForm from "./DiaryForm";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryForm />
      </aside>
      <ul className={styles.content_list}>목록</ul>
    </main>
  );
};
export default Home;
