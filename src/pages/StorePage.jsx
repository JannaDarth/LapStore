import React from "react";
import FilterBar from "../components/FilterBar";
import Product from "../components/Product";
import { connect } from "react-redux";
import Pagination from "../components/Pagination";
import CompareBar from "../components/CompareBar";

function StorePage({ filteredProducts, itemsPerPage, currentPage }) {
  return (
    <>
    <section className="storePage container underHeader">
      <div className="filterBar">
        <FilterBar />
      </div>
      <div className="storePagAndProd">
        <Pagination />
        <div className="productsArea">
          {filteredProducts
            .filter((a, i) => i< itemsPerPage*currentPage && i >=itemsPerPage*(currentPage-1))
            .map((prod) => (
              <Product key={prod.id} product={prod} />
            ))}
        </div>
      </div>
    </section>
    <CompareBar/>
    </>
  );
}
const t = (a) => {
  return {
    filteredProducts: a.filteredProducts,
    itemsPerPage: a.itemsPerPage,
    currentPage: a.currentPage,
  };
};
export default connect(t)(StorePage);
