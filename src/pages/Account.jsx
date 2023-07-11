import React from "react";
import { connect } from "react-redux";

function Account({ profile }) {
  return (
    <section className="underHeader">
      <div>This is an account for {profile}</div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
export default connect(mapStateToProps)(Account);
