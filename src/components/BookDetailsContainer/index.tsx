import { useParams } from "react-router-dom";
import getData from "../../hooks/getData";

const BookDetailContainer = () => {
  const params = useParams();
  const id = params.id;
  const { data } = getData(`http://localhost:8080/books/${id}`);

  return <h2 className="book-title">{data.name}</h2>;
};

export default BookDetailContainer;
