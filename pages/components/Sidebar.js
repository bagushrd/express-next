import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Sidebar extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div className="sidebar">
          <nav className="sidebar-nav">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/admin">Dashboard</a>
              </li>
              { /*
              <li className="nav-title">Theme</li>
              <li className="nav-item">
                <a className="nav-link" href="colors.html">
                  Colors</a>
              </li>
              <li className="nav-title">Components</li>
              <li className="nav-item nav-dropdown">
                <a className="nav-link nav-dropdown-toggle" href="#">
                  Base</a>
                <ul className="nav-dropdown-items">
                  <li className="nav-item">
                    <a className="nav-link" href="base/breadcrumb.html">
                      Breadcrumb</a>
                  </li>
                </ul>
              </li>
              */ }
              <li className="nav-item">
                <a className="nav-link" href="/admin/pull_data">Pull Data</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/user">User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/booking">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/payment">Payment</a>
              </li>
              <li className="nav-item nav-dropdown">
                <a className="nav-link nav-dropdown-toggle" href="#">Newbook</a>
                <ul className="nav-dropdown-items">
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/newbook_api_keys">API Keys</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;