import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGamepad,
  faFilm,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Product_Purpose_Brand from "./Product_Purpose_Brand";
import { useState,useEffect } from "react";

function PurposeOfUse({ allProducts }) {
  const [chosenType,setChosenType]=useState("Educational");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const destinationHandler = (e) => {
    let clickedElement = e.target.closest("li");
    clickedElement&&setChosenType(clickedElement.getAttribute("name"));
  };

  useEffect(() => {
    setFilteredProducts(allProducts.filter((a)=>a.destination==chosenType).sort(()=>Math.random()-0.5));
  }, [chosenType]);

  return (
    <section className="purposeArea">
      <div className="container">
        <ul className="purposeList" onClick={(e) => destinationHandler(e)}>
          <li name="Educational">
            <FontAwesomeIcon icon={faBook} />
            <span>Educational</span>
          </li>
          <li name="Gaming">
            <FontAwesomeIcon icon={faGamepad} />
            <span>Gaming</span>
          </li>
          <li name="Personal_Usage">
            <FontAwesomeIcon icon={faFilm} />
            <span>Personal Use</span>
          </li>
          <li name="Bussiness">
            <FontAwesomeIcon icon={faUserTie} />
            <span>Bussiness</span>
          </li>
        </ul>
        <div className="purposedProducts">
          {filteredProducts
            .filter((a, i) => i < 4)
            .map((prod) => (
              <Product_Purpose_Brand key={prod.id} product={prod} />
            ))}
        </div>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(PurposeOfUse);
