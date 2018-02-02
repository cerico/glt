import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import styles from "../main.css";

class Results extends React.Component {
  constructor() {
    super();
  }

  showArticles() {
    return (
      <div className={styles.results}>
        <div className={styles.header}>{this.props.title}</div>
        <div className={styles.result}>
          {this.props.items.map((article, i) => {
            return <div key={i}>{article.title}</div>;
          })}
        </div>
      </div>
    );
  }
  pending() {
    return <div />;
  }

  render() {
    if (this.props.items) return this.showArticles();
    return this.pending();
  }
}

const mapStateToProps = state => {
  return {
    items: state.results.items,
    title: state.results.feed.link
  };
};

export default connect(mapStateToProps, {})(Results);
