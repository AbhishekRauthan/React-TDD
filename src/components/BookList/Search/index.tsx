import { Input, InputGroup } from "@chakra-ui/react";
import { Label } from "./style";

type Props = {
  term: string;
  onSearch: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Search = ({ term, onSearch }: Props) => {
  return (
    <InputGroup
      width={{ base: "80vw", md: "60vw", lg: "lg" }}
      position="relative"
      marginTop={{ lg: "5" }}
    >
      <Input
        value={term}
        type="text"
        onChange={onSearch}
        data-test="search"
        margin="3"
        _placeholder={{ opacity: 0 }}
        placeholder="Search"
        variant="flushed"
        focusBorderColor="black"
        className="peer"
        _focusVisible={{
          boxShadow: "none",
          borderColor: "#000",
        }}
      />
      <Label>Search</Label>
    </InputGroup>
  );
};

export default Search;
