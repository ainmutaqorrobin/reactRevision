import Post from "./Post";
import styles from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();

  let postContent;

  posts.length > 0
    ? (postContent = (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} body={post.body} author={post.author} />
          ))}{" "}
        </ul>
      ))
    : (postContent = (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      ));
  return <>{postContent}</>;
}
