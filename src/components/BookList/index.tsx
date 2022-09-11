import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { BookType } from "@type/BookTypes";
import { Link } from "react-router-dom";

interface Props {
  books: BookType[];
  loading: boolean;
  error: boolean;
}

const BookList = ({ books, error, loading }: Props) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="" data-test="book-list">
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={4} sm={4} className="book-item" key={book.id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      textOverflow: "ellipsis",
                      maxHeight: 30,
                      overflow: "hidden",
                    }}
                    className="title"
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      textOverflow: "ellipsis",
                      maxHeight: 40,
                      overflow: "hidden",
                    }}
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookList;
