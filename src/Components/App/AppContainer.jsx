import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if (this.state.message === "Hello") {
        this.setState({
          message: "Bye bye"
        });
      } else {
        this.setState({
          message: "Hello"
        });
      }
    };
    this.state = {
      message: "Hello",
      changeMessage: this._changeMessage
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "Bye"
      });
    }, 2000);
  };
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
