import { connect } from "react-redux";
import Hero from "../components/Hero";
import PurposeOfUse from "../components/PurposeOfUse";
import BlogHomePage from "../components/BlogHomePage";
import DeliveryBanner from "../components/DeliveryBanner";

function HomePage(props) {
  return (
    <>
      <Hero />
      <PurposeOfUse />
      <BlogHomePage/>
      <DeliveryBanner/>
    </>
  );
}
const t = (a) => a;
export default connect(t)(HomePage);
