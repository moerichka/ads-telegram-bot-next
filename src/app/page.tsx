import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className="App-header">
        <h1>Welcome to My Telegram Mini App</h1>
        <p>This is a mini app integrated with Telegram.</p>
        <div className="ads-container"></div>
      </header>
    </main>
  );
}
