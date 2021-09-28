import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export const MapContainer = ({ google, launches }: any) => {
  console.log(launches);
  return (
    // @ts-ignore
    <Map google={google} zoom={2}>
      {launches.map(({ id, pad: { latitude, longitude } }: any) => {
        console.log(latitude, longitude);

        return (
          <Marker
            // @ts-ignore
            id={id}
            position={{lat: latitude, lng: longitude}}
          />
        );
      })}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAJoiMrOAQjEOUENy9SDXKbYisrEkhkZkA',
})(MapContainer)