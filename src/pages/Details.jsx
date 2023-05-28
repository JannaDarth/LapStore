import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

function Details({dispatch,singleProduct}) {
  const { id } = useParams();
  dispatch({
    type:"SINGLEPRODUCT",
    payload:id
  })
  return <Product product={singleProduct}/>;
}

const t=(a)=>a;
export default connect(t)(Details);
