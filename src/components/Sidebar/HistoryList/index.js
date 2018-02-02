import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import styles from "./feeds.css";
import Input from "../Input";
import { withRouter } from "react-router-dom";
import { sendText, removeFeed } from "../../../state/actions";

class HistoryList extends React.Component {
  constructor() {
    super();
    this.sendText = this.sendText.bind(this);

    this.removeFeed = this.removeFeed.bind(this);
    this.state = {
      message: ""
    };
  }

  removeFeed(url) {
    this.props.history.push(`/`);
    this.props.removeFeed(url);
  }

  sendText(url) {
    this.props.history.push(`/${url}`);
    this.props.sendText(url);
  }

  showFeeds() {
    return (
      <div>
        {this.props.feeds.map((url, i) => {
          return (
            <div className={styles.result} key={url}>
              <span onClick={() => this.sendText(url)}>{url}</span>
              <span
                onClick={() => this.removeFeed(url)}
                className={styles.remove}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  pending() {
    return <div>Enter feeds above!</div>;
  }

  render() {
    if (this.props.feeds.length > 0) return this.showFeeds();
    return this.pending();
  }
}

const mapStateToProps = state => {
  return {
    feeds: state.feeds
  };
};

export default withRouter(
  connect(mapStateToProps, { sendText, removeFeed })(HistoryList)
);
