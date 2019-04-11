import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styled from 'styled-components';

export class MapContainer extends Component {
  state = {
    selectedPlace: "Shop"
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
      <React.Fragment>
        
        <Header>
          <h1>We Are Hear</h1>
        </Header>
        <Main>
          <Map
            google={this.props.google}
            zoom={12}
            style={style}
            value="We Are Hear"
            initialCenter={{
              lat: 53.548532,
              lng: -2.113063
            }}>
            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
 
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h2>{this.state.selectedPlace}</h2>
              </div>
            </InfoWindow>
          </Map>
        
        </Main>
      </React.Fragment>
    );
  }
}

const Header = styled.header`
  h1 {
    text-align: center;
    color: red;
  }
`;

const Main = styled.main`
  padding: 3rem 0 1rem 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)