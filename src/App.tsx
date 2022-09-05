import { Typography } from "@mui/material";

const App = () => {
  const books = [
    {
      name: "Refactoring",
    },
    {
      name: "Domain-driven design",
    },
  ];
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <div className="" data-test="book-list">
        {books.map((book) => (
          <div className="book-item">
            <h2 className="title">{book.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
