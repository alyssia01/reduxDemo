import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import * as counterActions from "./action/counter";
import { bindActionCreators } from "redux";

class App extends Component {
  inc(num) {
    this.props.counterActions.increment(num);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>计数器：{this.props.counter}</h1>
        <h2>
          <button onClick={this.inc.bind(this, 10)}>增加</button>
          <button
            onClick={() => {
              this.props.counterActions.decrement(5);
            }}
          >
            减少
          </button>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   increment: () => {
  //     dispatch(increment());
  //   },
  //   decrement: () => {
  //     dispatch(decrement());
  //   }
  // };
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
    // counterActions: bindActionCreators(counterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
