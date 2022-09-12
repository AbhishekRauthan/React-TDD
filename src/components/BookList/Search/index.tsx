import { TextField } from "@mui/material";

type Props = {
  term: string;
  onSearch: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Search = ({ term, onSearch }: Props) => {
  return (
    <TextField
      label="Search"
      value={term}
      type="text"
      onChange={onSearch}
      data-test="search"
      variant="outlined"
      margin="normal"
    />
  );
};

export default Search