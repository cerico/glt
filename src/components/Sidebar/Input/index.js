import React from "react";
const classNames = require("classnames");
import styles from "./input.css";
import "./fonts.css";

class Input extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    };
  }

  handleChange(event) {
    this.props.change(event);
  }

  render() {
    const email = {
      color: this.props.scheme.bg,
      backgroundColor: this.props.scheme.fg,
      borderColor: this.props.scheme.bg
    };

    const submit = {
      color: this.props.scheme.fg,
      backgroundColor: this.props.scheme.bg,
      borderColor: this.props.scheme.bg
    };

    return (
      <form className={styles.form}>
        <label className={styles.hidden}>Email</label>
        <input
          style={email}
          placeholder="Enter search text..."
          className={classNames(styles.input, styles.email)}
          onChange={(e, input) => this.handleChange(e.target.value)}
          required=""
          type="text"
        />
        <span
          style={submit}
          className={classNames(styles.input, styles.submit)}
          onClick={() => this.props.submit()}
        >
          Go
        </span>
      </form>
    );
  }
}

export default Input;
