import styles from "./home.module.css";

const DiaryList = ({ diaries }) => {
  // createTime 기준 내림차순 정렬
  const sortedDiaries = [...diaries].sort(
    (a, b) => b.createTime?.seconds - a.createTime?.seconds
  );

  return (
    <>
      {sortedDiaries.map((item) => {
        return (
          <li key={item.id}>
            <strong className={styles.title}>{item.title}</strong>
            <p className={styles.text}>{item.text}</p>
          </li>
        );
      })}
    </>
  );
};
export default DiaryList;
