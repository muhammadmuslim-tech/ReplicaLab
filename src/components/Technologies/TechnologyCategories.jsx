import "./TechnologyCategories.css";

export default function TechnologyCategories({
  categories,
  activeCategory,
  setActiveCategory,
  technologies,
}) {
  return (
    <div className="technology-categories">
      {categories.map((category) => {
        const count =
          category.key === "all"
            ? technologies.length
            : technologies.filter(
                (technology) => technology.category === category.key
              ).length;

        return (
          <button
            key={category.key}
            className={
              activeCategory === category.key
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setActiveCategory(category.key)}
          >
            <span>{category.name}</span>
            <small>{count}</small>
          </button>
        );
      })}
    </div>
  );
}