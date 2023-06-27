import { getProducts, getProduct } from "../service/ProductService";
const initialState = {
  allProducts: getProducts(),
  singleProduct: 1,
  filteredProducts: [],
  itemsPerPage: 0,
  sortingOrder: 0,
  currentPage: 1,
  comparison: [],
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
    case "ADDTOCOMPARE":
      console.log(state.comparison);
      if (!action.payload) {
        return { ...state, comparison: [] };
      }
      let temp = [];
      // 5 is the total number of products which user can compare 
      if (state.comparison.length < 5) {
        state.comparison.includes(action.payload)
          ? (temp = state.comparison.filter((a) => a != action.payload))
          : (temp = [...state.comparison, action.payload]);
      } else {
        state.comparison.includes(action.payload)
          ? (temp = state.comparison.filter((a) => a != action.payload))
          : (temp = [...state.comparison.slice(0, -1), action.payload]);
      }
      return { ...state, comparison: temp,console };
    case "CURRENTPAGE":
      console.log("current page has been set to:  reducer");
      return { ...state, currentPage: action.payload };
  }
  return state;
}
