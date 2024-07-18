import styles from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}
