/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap(({ mapStyles, isMarkerShown }) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 51.519472, lng: -0.089491 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {isMarkerShown && <Marker position={{ lat: 51.519472, lng: -0.089491 }} />}
    </GoogleMap>
  )),
);

Map.propTypes = {
  mapStyles: PropTypes.object.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
};

Map.defaultProps = {
  isMarkerShown: true,
  mapStyles: []
};

export { Map };
