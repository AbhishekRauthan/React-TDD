interface Props {
  books: { name: string }[];
}

const BookList = ({ books }: Props) => {
  return (
    <div className="" data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
