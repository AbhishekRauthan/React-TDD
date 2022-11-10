import { Flex, Heading, Text } from "@chakra-ui/react";
import { BookType } from "@type/BookTypes";

interface Props {
  book: BookType;
}

const BookDetails = ({ book }: Props) => {
  return (
    <Flex direction="column" marginTop={{ base: "5" }}>
      <Heading
        className="book-title"
        textAlign="left"
        fontSize={{ base: "3xl" }}
      >
        {book.name}
      </Heading>
      <Text
        marginTop={{ base: "3" }}
        fontSize={{ base: "xl" }}
        className="book-description"
      >
        {book.description}
      </Text>
    </Flex>
  );
};

export default BookDetails;
