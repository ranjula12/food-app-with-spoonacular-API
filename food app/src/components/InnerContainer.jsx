import styles from "./innercontainer.module.css";

export default function InnerContainer({ children, style }) {
  return (
    <div className={styles.innerContainer} style={style}>
      {children}
    </div>
  );
}
