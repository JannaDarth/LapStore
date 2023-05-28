import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Pagination({ dispatch, productLength }) {
  const [perPage, setPerPage] = useState(24);
  const [sortValue, setSortValue] = useState(0);

  useEffect(() => {
    setCurrentPage(1);
    dispatch({
      type: "ITEMSPERPAGE",
      payload: perPage,
    });
  }, [perPage,productLength]);

  useEffect(() => {
    dispatch({
      type: "SORTPRODUCTS",
      payload: sortValue,
    });
  }, [sortValue]);

  const totalPages = Math.ceil(productLength / perPage);
  const [currentPage, setCurrentPage] = useState(1);
  let start = currentPage - 2 > 0 ? currentPage - 2 : 1;
  let end = currentPage + 2 < totalPages ? currentPage + 2 : totalPages;
  let pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(
      <li onClick={() => setCurrentPage(i)} key={i}>
        {i}
      </li>
    );
  }

  useEffect(() => {
    dispatch({
      type: "CURRENTPAGE",
      payload: currentPage,
    });
  }, [currentPage]);

  return (
    <section className="pagiBar">
      <div className="sortSide">
        <select onChange={(e) => setPerPage(+e.target.value)}>
          <option value="24">24 per page</option>
          <option value="48">48 per page</option>
          <option value="96">96 per page</option>
        </select>
        <select onChange={(e) => setSortValue(+e.target.value)}>
          <option value="0">Price (Low-High)</option>
          <option value="1">Price (High-Low)</option>
          <option value="2">Name (A-Z)</option>
          <option value="3">Name (Z-A)</option>
          <option value="4">Weight (Low-High)</option>
          <option value="5">Weight (High-Low)</option>
        </select>
      </div>
      <div className="pagiSide">
        <ul>
          <li
            onClick={() =>
              setCurrentPage(currentPage - 1 > 1 ? currentPage - 1 : 1)
            }
          >
            &#8592;
          </li>
          {pages}
          <li onClick={() => setCurrentPage(currentPage+1<totalPages ? currentPage+1 : totalPages)}>&#8594;</li>
        </ul>
      </div>
    </section>
  );
}
const t = (a) => {
  return {
    productLength: a.filteredProducts.length,
  };
}
export default connect(t)(Pagination);
