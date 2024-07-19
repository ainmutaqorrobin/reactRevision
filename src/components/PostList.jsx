import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

export default function PostList() {
  const [modalVisible, setModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function modalHandler() {
    setModalVisible(false);
  }
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (modalVisible) {
    modalContent = (
      <Modal onClose={modalHandler}>
        <NewPost
          onAuthorChange={authorChangeHandler}
          onBodyChange={bodyChangeHandler}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalVisible ? modalContent : null}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="ain" body="terlalu simple" />
      </ul>
    </>
  );
}
