import { getProducts, getProduct } from "../service/ProductService";
const initialState = {
  allProducts: getProducts(),
  singleProduct: 1,
  filteredProducts: [],
  itemsPerPage: 0,
  sortingOrder: 0,
  currentPage: 1,
  comparison: [],
  users: [],
  profile: "",
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
      if (!action.payload) {
        return { ...state, comparison: [] };
      }
      let temp = [];
      // 4 is the total number of products which user can compare
      if (state.comparison.length < 4) {
        state.comparison.includes(action.payload)
          ? (temp = state.comparison.filter((a) => a != action.payload))
          : (temp = [...state.comparison, action.payload]);
      } else {
        state.comparison.includes(action.payload)
          ? (temp = state.comparison.filter((a) => a != action.payload))
          : (temp = [...state.comparison.slice(0, -1), action.payload]);
      }
      return { ...state, comparison: temp, console };
    case "CURRENTPAGE":
      return { ...state, currentPage: action.payload };
    case "EMPTYCOMPARE":
      return { ...state, comparison: [] };
    case "ADDNEWUSER":
      console.log(action.payload)
      return { ...state, users: [...state.users, action.payload],profile:action.payload.email };
    case "LOGINOUT":
      console.log(state.users);
      return { ...state, profile: action.payload ? action.payload : "" };
  }
  return state;
}
