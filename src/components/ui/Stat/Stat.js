/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@theme-ui/components';

const Stat = ({ headline, content }) => (
  <Box>
    <Heading
      as="h1"
      variant={'text.heading'}
      sx={{
        fontSize: [6, null, 7],
        fontStyle: 'italic',
      }}
    >
      {headline}
    </Heading>
    <Heading
      as="h5"
      variant={'text.heading'}
      >
      {content}
    </Heading>
  </Box>
);

Stat.propTypes = {
  headline: PropTypes.string,
  content: PropTypes.string,
};

Stat.defaultProps = {
  headline: null,
  content: null,
};

export { Stat };
