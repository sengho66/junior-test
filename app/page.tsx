import React from "react";
import Table from "./components/table";
import styles from "./page.module.css";
import { getBooks } from "./utils";

export default async function Home() {
  const books = await getBooks();

  return (
    <main className={styles.main}>
      <div>
        <Table books={books} />
      </div>
    </main>
  );
}
