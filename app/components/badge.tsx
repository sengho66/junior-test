import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { Book } from "../types";

interface Props {
  book: Book;
}

function formatDate(date: string) {
  return date.split("-").reverse().join("-");
}

function Badge({ book }: Props) {
  return (
    <Flex>
      <Box ml="3">
        <Text fontWeight="bold">Title: {book.title}</Text>
        <Text fontSize="sm">Author: {book.author}</Text>
        <Text fontSize="sm">Genre {book.genre}</Text>
        <Text fontSize="sm">Description: {book.description}</Text>
        <Text fontSize="sm">Image: {book.image}</Text>
        <Text fontSize="sm">ISBN: {book.isbn}</Text>
        <Text fontSize="sm">Published: {formatDate(book.published)}</Text>
        <Text fontSize="sm">Publisher: {book.publisher}</Text>
      </Box>
    </Flex>
  );
}

export default Badge;
