import axios from "axios";
import { useEffect, useState } from "react";

const getData = (initialUrl: string) => {
  const [data, setData] = useState<any>([]);
  const [url, setUrl] = useState(initialUrl);
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
  }, [url]);

  return { data, error, loading, setUrl };
};

export default getData;
