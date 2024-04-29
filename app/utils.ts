import { Books } from "./types";

export async function getBooks(): Promise<Books> {
  const res = await fetch("https://fakerapi.it/api/v1/books");
  return await res.json();
}
