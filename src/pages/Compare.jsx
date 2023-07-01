import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Compare({comparison}) {
  console.log(comparison)
    return (
    <section className="underHeader">
      <div className="container compareWiev">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Screen</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Weight</th>
              <th>Best Price at</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {comparison.length&&comparison.map((product) => (
              <tr key={product.id}>
                <td>
                <Link to={`/details/${product.id}`}>
                <img src={product.img} alt={product.title} />
                </Link>
                </td>
                <td>{product.title}</td>
                <td>{product.screen}</td>
                <td>{product.cpu?product.cpu:"***"}</td>
                <td>{product.memory}</td>
                <td>{product.storage}</td>
                <td>{product.weight}</td>
                <td>{product.best_price}</td>
                <td>{product.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
const t = (a) => {
  return {
    comparison: a.comparison,
  };
};
export default connect(t)(Compare);
