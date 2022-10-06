import {
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BookType } from "@type/BookTypes";
import { Link } from "react-router-dom";

interface Props {
  books: BookType[];
  loading: boolean;
  error: boolean;
}

const BookList = ({ books, error, loading }: Props) => {
  if (loading) {
    return (
      <Heading as="p" fontSize={{ base: "xl" }}>
        Loading
      </Heading>
    );
  }

  if (error) {
    return (
      <Heading as="p" fontSize={{ base: "xl" }}>
        Error
      </Heading>
    );
  }
  return (
    <Grid
      data-test="book-list"
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3, 1fr)" }}
      gap={6}
      paddingX={{ lg: "5" }}
    >
      {books.map((book) => (
        <GridItem
          as={VStack}
          spacing={3}
          width={{ base: "75vw", md: "60vw", lg: "100%" }}
          marginX={{ base: "auto" }}
          colSpan={1}
          className="book-item"
          key={book.id}
          boxShadow="md"
          padding="4"
          border="1px"
        >
          <Heading
            as="h2"
            fontSize={{ base: "xl" }}
            textTransform="capitalize"
            textAlign="center"
            data-test="title"
          >
            {book.name}
          </Heading>
          <Text fontSize={{ base: "md" }}>
            {book.description ? book.description : book.name}
          </Text>
          <Link to={`/books/${book.id}`}>
            <Button variant="link" colorScheme="black">
              View Details
            </Button>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default BookList;
