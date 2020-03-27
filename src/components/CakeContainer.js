import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
export function CakeContainer(props) {
  return (
    <div>
      <h2>Number Of Cakes : {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    numberOfCakes: state.numberOfCakes
  };
}
function mapDispatchToProps(dispatch) {
  return {
    buyCake: () => {
      dispatch(buyCake());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
