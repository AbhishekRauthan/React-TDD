import axios from "axios";
import { useEffect, useState } from "react";

const getData = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    })();
  }, []);

  return { data, error, loading };
};

export default getData;
