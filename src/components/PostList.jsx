import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();
      setPosts(responseData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;
  let postContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }
  !isFetching && posts.length > 0
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
  isFetching &&
    (postContent = (
      <div style={{ textAlign: "center", color: "white" }}>
        <p>Loading post...</p>
      </div>
    ));
  return (
    <>
      {isPosting ? modalContent : null}
      {postContent}
    </>
  );
}
