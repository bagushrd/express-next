import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

function Button(props) {
  const [submitClass, setSubmitClass] = React.useState('btn btn-sm btn-primary');
  const [submitName, setSubmitName] = React.useState(props.title);

  React.useEffect(() => {
    if (props.loading) {
      setSubmitClass('btn btn-sm btn-secondary');
      setSubmitName('Loading');
    } else {
      setSubmitClass('btn btn-sm btn-primary');
      setSubmitName(props.title);
    }
  }, [props.loading]);

  return (
    <React.Fragment>
      <button className={submitClass} type="submit" onClick={props.onSubmit}>{submitName}</button>
    </React.Fragment>
  )
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;