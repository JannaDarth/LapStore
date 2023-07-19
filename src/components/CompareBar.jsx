import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function CompareBar({ comparison, dispatch, singleProduct }) {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <section className="compareShow">
        <div
          className="compareBar"
          style={{ display: hide ? "none" : "inherit" }}
        >
          <div className="compareControls">
            <button onClick={() => setHide(!hide)}>Hide</button>
            <button onClick={() => navigate("/compare")}>Compare</button>
            <button onClick={() => dispatch({ type: "EMPTYCOMPARE" })}>
              Clear
            </button>
          </div>
          <div className="compareProducts">
            {comparison.length &&
              comparison.map((item) => (
                <div onClick={()=>console.log(55)} key={item.id} className="compareUnit">
                  <img src={item.img} alt="" />
                  <div className="compareUnitInfo">
                    <h4>{item.title.slice(0, 15)}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {hide && (
          <button
            className="compareShowButton"
            onClick={() => setHide(!hide)}
          >
            Show
          </button>
        )}
      </section>
    </>
  );
}
const t = (a) => {
  return {
    comparison: a.comparison,
    singleProduct: a.singleProduct,
  };
};

export default connect(t)(CompareBar);
