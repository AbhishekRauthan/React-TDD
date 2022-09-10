import { useParams } from "react-router-dom";
import getData from "../../../hooks/getData";
import BookDetails from "..";

const BookDetailContainer = () => {
  const params = useParams();
  const id = params.id;
  const { data } = getData(`http://localhost:8080/books/${id}`);

  return <BookDetails book={data} />
};

export default BookDetailContainer;
