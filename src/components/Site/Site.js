import React from 'react';
import PropTypes from 'prop-types';

import { Theme } from '../ui/Theme';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { SEO } from './SEO';
import { Container } from '@theme-ui/components';

const Site = ({ children, seo, ...other }) => (
  <Theme>
    <SEO seo={seo} {...other} />
    <Navigation {...other} />
    <Container bg='background' as='main'>
      {children}
    </Container>
    <Footer {...other} />
  </Theme>
);

Site.propTypes = {
  children: PropTypes.node,
  seo: SEO.propTypes.seo,
};

Site.defaultProps = {
  children: null,
  seo: {},
};

export { Site };
