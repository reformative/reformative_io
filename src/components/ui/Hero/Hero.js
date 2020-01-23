/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Box, Heading, Button, Card, Embed } from '@theme-ui/components';
import heroBg from '../../../assets/background.jpg';

const Hero = ({ media, headline, content, callToAction }) => (
  <Container
    px={[4, null, 5]}
    pt={6}
    pb={6}
    color="white"
    bg="secondary"
    sx={{
      background: `linear-gradient(var(--theme-ui-colors-secondary,#001746), #00174600), url(${heroBg})`,
      backgroundSize: `cover`,
    }}
  >
    <Grid gap={[4, null, 2]} columns={[1, null, 2]}>
      <Box>
        <Heading
          as="h1"
          mb={4}
          sx={{
            fontSize: 6,
          }}
        >
          {headline}
        </Heading>
        <Heading as="h2" mb={2}>
          {content}
        </Heading>
        <Box mt={4}>{callToAction}</Box>
      </Box>
      <Box>
        <Embed src={media} />
      </Box>
    </Grid>
  </Container>
);

Hero.propTypes = {
  media: PropTypes.node,
  headline: PropTypes.string,
  content: PropTypes.string,
  callToAction: PropTypes.node,
};

Hero.defaultProps = {
  media: null,
  headline: null,
  content: null,
  callToAction: null,
};

export { Hero };
