export interface Books {
  status: string;
  code: number;
  total: number;
  data: Book[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}
