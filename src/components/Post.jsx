import { Link } from "react-router-dom";
import styles from "./Post.module.css";
const names = ["Ain Mutaqorrobin", "Robin Kacak"];

export default function Post(props) {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={styles.post}>
      <Link to={props.id}>
        <p>{props.author}</p>
        <p>{props.body}</p>
      </Link>
    </li>
  );
}
