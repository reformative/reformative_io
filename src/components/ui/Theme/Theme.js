import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'theme-ui';
import theme from './theme-ui';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Theme };
