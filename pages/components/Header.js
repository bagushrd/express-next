import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css" />

          <title>Campedia Admin</title>
        </Head>

        <header className="app-header navbar" style={{backgroundColor: '#2f353a'}}>
          <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <h3>Admin</h3>
          </a>
          <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img className="img-avatar" src="/images/logo.png" alt="admin@bootstrapmaster.com" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/admin/logout">
                  <i className="fa fa-lock"></i> Logout</a>
              </div>
            </li>
          </ul>
        </header>
      </React.Fragment>
    )
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;