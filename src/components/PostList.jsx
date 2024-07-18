import Post from "./Post";
import styles from "./PostList.module.css";

export default function PostList() {
  return (
    <ul className={styles.posts}>
      <Post author="Ain Mutaqorrobin" body="terlalu kacak" />
      <Post author="Mus'ab musaimmar" body="terlalu simple" />
    </ul>
  );
}
