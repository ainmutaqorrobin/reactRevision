import { useState } from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <textarea
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
