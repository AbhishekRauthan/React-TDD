import axios from "axios";
import { useEffect, useState } from "react";

export default function getData(url: string) {
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setBooks(res.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return { books, error, loading };
}
