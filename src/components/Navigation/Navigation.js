/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { uid } from 'react-uid';
import { Link } from 'gatsby';

import logo from '../../assets/reformative-logo.svg';

import { Container, Grid, Box, NavLink, Image } from '@theme-ui/components';

const items = [
  { label: 'Home', to: '/' },
  { label: 'Market', to: '/market/' },
  { label: 'Platform', to: '/platform/' },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
];

const Navigation = ({ path }) => {
  const {
    site: {
      siteMetadata: { name },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return (
    <Grid px={[4, null, 5]} py={4} gap={2} columns={[1, 2]} bg="secondary">
      <Box>
        <NavLink as={Link} to="/">
          <Image width={180} src={logo} />
        </NavLink>
      </Box>
      <Box
        as="nav"
        color="white"
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}
      >
        {items.map(({ label, to, href }) =>
          to ? (
            <NavLink key={uid(label)} as={Link} p={2} to={to} activeClassName="active">
              {label}
            </NavLink>
          ) : (
            <NavLink key={uid(label)} as="a" p={2} href={href}>
              {label}
            </NavLink>
          ),
        )}
      </Box>
    </Grid>
  );
};

Navigation.propTypes = {
  path: PropTypes.string.isRequired,
};

Navigation.defaultProps = {};

export { Navigation };
