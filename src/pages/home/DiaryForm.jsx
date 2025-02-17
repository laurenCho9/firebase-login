import { useState } from "react";

const DiaryForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleData = (e) => {
    if (e.target.id === title) {
      setTitle(e.target.value);
    } else if (e.target.id === text) {
      setText(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>일기 쓰기</legend>
        <label htmlFor="title">일기 제목: </label>
        <input type="text" id="title" required onChange={handleData} />

        <label htmlFor="subscript">일기 내용: </label>
        <textarea type="text" id="subscript" required onChange={handleData} />

        <button type="submit">저장하기</button>
      </fieldset>
    </form>
  );
};
export default DiaryForm;
