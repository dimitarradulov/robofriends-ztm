interface Props {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<Props> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
