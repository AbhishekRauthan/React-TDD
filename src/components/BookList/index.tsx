interface Props {
  books: { name: string; id: number }[];
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
    <div className="" data-test="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
