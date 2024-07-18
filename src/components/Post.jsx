import styles from "./Post.module.css";
const names = ["Ain Mutaqorrobin", "Robin Kacak"];

export default function Post(props) {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={styles.post}>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </li>
  );
}
