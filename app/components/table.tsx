import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Books } from "../types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Table({ books }: { books: Books }) {
  const booksList = books.data;
  return (
    <TableContainer maxW="700px" overflow="scroll" border="#bbbbbb solid">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            <Th width="100%">id</Th>
            <Th minW="200px">title</Th>
            <Th minW="175px">author</Th>
            <Th minW="135px">genre</Th>
            <Th minW="210px">description</Th>
            <Th minW="171px">isbn</Th>
            <Th width="100%">image</Th>
            <Th width="100%">published</Th>
            <Th width="100%">publisher</Th>
          </Tr>
        </Thead>
        <Tbody>
          {booksList.map((book) => (
            // <Link href={String(book.id)}>
            <Tr fontSize="0.9rem" key={book.id}>
              <Td textAlign="end">{book.id}</Td>
              <Td minW="200px">
                {" "}
                <Link href={`/book?id=${book.id}`}>{book.title} </Link>
              </Td>
              <Td minW="175px">{book.author}</Td>
              <Td minW="135px">{book.genre}</Td>
              <Td
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                maxW={200}
                minW="210px"
              >
                {book.description}
              </Td>
              <Td>{book.isbn}</Td>
              <Td>{book.image}</Td>
              <Td>{book.published}</Td>
              <Td>{book.publisher}</Td>
            </Tr>
            // </Link>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
}

export default Table;
