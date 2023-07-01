import React from "react";
import FilterBar from "../components/FilterBar";
import Product from "../components/Product";
import { connect } from "react-redux";
import Pagination from "../components/Pagination";
import CompareBar from "../components/CompareBar";

function StorePage({ filteredProducts, itemsPerPage, currentPage,comparison }) {
  return (
    <>
    <section>
      <div className="storePage container" >
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
      </div>
      {comparison.length?<CompareBar/>:""}
    </section>
    
    </>
  );
}
const t = (a) => {
  return {
    filteredProducts: a.filteredProducts,
    itemsPerPage: a.itemsPerPage,
    currentPage: a.currentPage,
    comparison : a.comparison,
  };
};
export default connect(t)(StorePage);
