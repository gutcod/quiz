import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  { to: "/", lable: "List", exact: true },
  { to: "/auth", lable: "Authorization", exact: false },
  { to: "/quiz-creator", lable: "Create List", exact: false },
];

export default class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName="active"
            onClick={() => this.props.onClose()}
          >
            {link.lable}
          </NavLink>
        </li>
      );
    });
  };
  render() {
    const cls = ["Drower"];
    if (!this.props.isOpen) {
      cls.push("close");
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}
