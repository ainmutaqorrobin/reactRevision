import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <textarea type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = await Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
