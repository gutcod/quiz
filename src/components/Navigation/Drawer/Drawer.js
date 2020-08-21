import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default class Drawer extends Component {
  renderLinks = (links) => {
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
    const links = [{ to: "/", lable: "List", exact: true }];
    console.log("auth", this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      links.push({ to: "/quiz-creator", lable: "Create List", exact: false });
      links.push({ to: "/logout", lable: "Log Out", exact: false });
    } else {
      links.push({ to: "/auth", lable: "Authorization", exact: false });
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}
