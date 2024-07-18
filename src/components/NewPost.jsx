import { useState } from "react";
import styles from "./NewPost.module.css";

export default function NewPost(props) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <textarea
          type="text"
          id="name"
          required
          onChange={props.onAuthorChange}
        />
      </p>
    </form>
  );
}
