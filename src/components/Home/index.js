import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styled from 'styled-components';

export class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: "Shop"
    }
  }

  onMarkerClick(props, marker, e) {
    alert("hay")
  }  

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
     <Main>
     
        <Map
        google={this.props.google}
        zoom={12}
        style={style}
        initialCenter={{
          lat: 53.548532,
          lng: -2.113063
        }}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
        
     </Main>
    );
  }
}

const Main = styled.main`
  
`;

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)