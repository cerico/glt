import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const classNames = require("classnames");
import styles from "../main.css";
import Input from "./Input";

import HistoryList from "./HistoryList";
import { sendText, checkFeeds } from "../../state/actions";

class Products extends React.Component {
  constructor() {
    super();
    this.sendText = this.sendText.bind(this);
    this.changeText = this.changeText.bind(this);
    this.state = {
      message: ""
    };
  }

  componentWillMount() {
    const url = this.props.location.pathname.substring(1);
    this.props.checkFeeds(url);
  }
  changeText(text, page) {
    this.setState({ message: text });
  }

  sendText() {
    this.props.history.push(`/${this.state.message}`);
    this.props.sendText(this.state.message);
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <Input
          change={this.changeText}
          message={this.state.message}
          submit={e => this.sendText(e)}
          scheme={{}}
        />
        <HistoryList
          change={this.changeText}
          message={this.state.message}
          submit={e => this.sendText(e)}
          scheme={{}}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default withRouter(
  connect(mapStateToProps, { sendText, checkFeeds })(Products)
);
