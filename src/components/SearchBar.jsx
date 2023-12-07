function SearchBar({ search, setSearch, onlyInStock, setOnlyInStock }) {
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          onChange={(e) => setOnlyInStock(e.target.checked)}
        />
        Only show products on stock
      </p>
    </div>
  );
}

export default SearchBar;
