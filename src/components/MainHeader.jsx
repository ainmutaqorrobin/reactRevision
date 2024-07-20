import { MdMessage, MdPostAdd } from "react-icons/md";
import styles from "./MainHeder.module.css";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage /> React Poster
      </h1>
      <p>
        <Link to="/create-post" className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
