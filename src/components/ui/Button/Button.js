import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonBase } from '@theme-ui/components';
import { Link } from 'gatsby';


const Button = ({ children, ...other }) => {
  return (
    <ButtonBase as={Link} to={'/platform'} py={4} py={3} {...other}>
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {};

export { Button };
