import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBase } from '@theme-ui/components';

const Button = ({ children, ...other }) => {
  return (
    <ButtonBase py={4} py={3} {...other}>
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {};

export { Button };
