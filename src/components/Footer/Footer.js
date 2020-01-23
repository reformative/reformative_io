import React from 'react';
import { Container, Grid, Box, Heading, Text, NavLink } from '@theme-ui/components';
import { Link } from 'gatsby';

const Footer = () => (
  <Container as="footer" color="white" bg="secondary" p={[4, null, 5]}>
    <Grid gap={[4, null, 2]} columns={[1, 2, 3, 4]}>
      <Box>
        <Heading pb={3}>Legal</Heading>
        <Text variant={'text.heading'}>
          <NavLink as={Link} to="/legal/privacy-policy">
            Privacy Policy
          </NavLink>
        </Text>
        <Text variant={'text.heading'}>
          <NavLink as={Link} to="/legal/terms-of-use">
            Terms of Use
          </NavLink>
        </Text>
      </Box>
      <Box>
        <Heading pb={3}>About Us</Heading>
        <Text variant={'text.heading'}>
          <NavLink as={Link} to="/about/team">
            Team
          </NavLink>
        </Text>
        <Text variant={'text.heading'}>
          <NavLink as={Link} to="/about/experience">
            Experience
          </NavLink>
        </Text>
      </Box>
      <Box>
        <Heading pb={3}>Contact</Heading>
        <Text variant={'text.heading'}>
          Reformative Limited.
          <br />
          CityPoint, 17th Floor.
          <br />
          1 Ropemaker Street.
          <br />
          London
          <br />
          EC2Y 9HT
        </Text>
      </Box>
    </Grid>
    <Text variant={'text.heading'} mt={4}>
      © {new Date().getFullYear()} | Reformative Limited
    </Text>
  </Container>
);

export { Footer };
