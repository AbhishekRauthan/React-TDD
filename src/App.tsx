import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import BookContainer from "./components/BookList/BookContainer";
import BookDetailContainer from "./components/BookDetails/BookDetailsContainer";

const App = () => {
  return (
    <Box
      maxWidth="container.lg"
      paddingX={{ base: "3", lg: "0" }}
      marginY={{ base:"4",lg: "7" }}
      marginX="auto"
    >
      <Heading as="h1" data-test="heading" fontSize={{base:"4xl"}}>
        Bookish
      </Heading>
      <Routes>
        <Route element={<BookContainer />} path="/" />
        <Route element={<BookDetailContainer />} path="/books/:id" />
      </Routes>
    </Box>
  );
};

export default App;
