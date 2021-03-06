import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMaps = (props) =>{
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return(
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          
        />
    )
}

export default GoogleApiWrapper({
    apiKey: 'ADD_YOUR_KEY_HERE'
  })(GoogleMaps);
