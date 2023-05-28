import { getProducts, getProduct } from "../service/ProductService";
const initialState = {
  allProducts: getProducts(),
  singleProduct: 1,
  filteredProducts: [],
  itemsPerPage: 0,
  sortingOrder: 0,
  currentPage: 1,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SINGLEPRODUCT":
      return { ...state, singleProduct: getProduct(action.payload) };
    case "ASSIGNFILTERS":
      return { ...state, filteredProducts: action.payload };
    case "ITEMSPERPAGE":
      return { ...state, itemsPerPage: action.payload };
    case "SORTPRODUCTS":
      return { ...state, sortingOrder: action.payload };
    case "CURRENTPAGE":
      console.log('current page has been set to:  reducer');
      return { ...state, currentPage: action.payload };
  }
  return state;
}
