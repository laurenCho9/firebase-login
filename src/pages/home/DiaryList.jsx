import { useFirestore } from "../../hooks/useFirestore";
import styles from "./home.module.css";

const DiaryList = ({ diaries }) => {
  const { deleteDocument } = useFirestore("diary");

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
            <button type="button" onClick={() => deleteDocument(item.id)}>
              삭제
            </button>
          </li>
        );
      })}
    </>
  );
};
export default DiaryList;
