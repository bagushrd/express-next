import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Body extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div className="app">
          <Header />

          <div className="app-body">
            <Sidebar />

            <main className="main">
              <Breadcrumb breadcrumb={this.props.breadcrumb} />

              {this.props.children}
            </main>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;