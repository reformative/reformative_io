/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Heading, Text } from '@theme-ui/components';

const AvatarCard = ({ avatar, title, content }) => (
  <Box mb={4}>
    <Image src={avatar} variant="avatar" mb={3} />
    <Heading
      as="h6"
      variant={'text.heading'}
      sx={{
        fontSize: [2, null, 4],
        fontStyle: 'italic',
      }}
    >
      {title}
    </Heading>
    <Text variant={'text.body'}>{content}</Text>
  </Box>
);

AvatarCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

AvatarCard.defaultProps = {
  title: null,
  content: null,
};

export { AvatarCard };
