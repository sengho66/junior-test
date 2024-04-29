import React from "react";
import styles from "../page.module.css";
import Badge from "../components/badge";
import { getBooks } from "../utils";
interface Props {
  params: { book: string };
  searchParams: { id: string };
}

export default async function Home({ params, searchParams }: Props) {
  const books = await getBooks();
  const selectedBook = books.data.find(
    (book) => book.id.toString() === searchParams.id
  );
  if (!selectedBook) return null;
  return (
    <main className={styles.main}>
      <div>
        <Badge book={selectedBook} />
      </div>
    </main>
  );
}
