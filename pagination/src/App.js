import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, []);

  const changePageHandler = (page) => {
    if (page < 1 || page > products.length / 10) return;
    setPage(page);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((p) => (
            <div className="product__single" key={p.id}>
              <img alt={p.title} src={p.thumbnail} />
              <span>{p.title}</span>
            </div>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => changePageHandler(page - 1)}
            className={page === 1 ? "pageSelectionDisabled" : ""}
          >
            &lt;
          </span>
          {[...Array(products.length / 10)].map((_, idx) => (
            <span
              className={page === idx + 1 ? "pageSelected" : ""}
              onClick={() => changePageHandler(idx + 1)}
              key={idx + 1}
            >
              {idx + 1}
            </span>
          ))}
          <span
            onClick={() => changePageHandler(page + 1)}
            className={
              page >= products.length / 10 ? "pageSelectionDisabled" : ""
            }
          >
            &gt;
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
