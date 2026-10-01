import "./TechnologySearch.css";

export default function TechnologySearch({
  search,
  setSearch,
  resultCount,
}) {
  return (
    <div className="technology-search-wrapper">
      <div className="technology-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search technologies, frameworks, AI, cloud..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <span className="search-result-count">
        {resultCount} technologies
      </span>
    </div>
  );
}