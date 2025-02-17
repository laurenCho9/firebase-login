import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const DiaryForm = ({ uid }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { addDocument, response } = useFirestore("diary");

  const handleData = (e) => {
    const { id, value } = e.target;
    if (id === "title") {
      setTitle(value);
    } else if (id === "text") {
      setText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, text);
    addDocument({ uid, title, text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>일기 쓰기</legend>
        <label htmlFor="title">일기 제목: </label>
        <input
          type="text"
          id="title"
          value={title}
          required
          onChange={handleData}
        />

        <label htmlFor="subscript">일기 내용: </label>
        <textarea id="text" value={text} required onChange={handleData} />

        <button type="submit">저장하기</button>
      </fieldset>
    </form>
  );
};
export default DiaryForm;
