import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styled from 'styled-components';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  
  windowHasOpened() {
    console.log()
  }  

  onInfoWindowClose() {
    alert("Yo")
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
 
    return (
      <React.Fragment>
        <header style={{padding: "1rem 0", textAlign: "center", color: "red"}}>
          <h1>WE ARE HERE</h1> 
        </header>  
        <Main>
          <Map 
            google={this.props.google}
            zoom={12}
            style={style}
            onClick={this.onMapClicked}
            value="We Are Hear"
            initialCenter={{
              lat: 53.548532,
              lng: -2.113063
            }}>
            <Marker
              animation={"1"}
              title="Shop"
              key='0' 
              icon={{
                url: require("./arrow.png"),
                anchor: new this.props.google.maps.Point(16, 16)
              }} 
              position={{
                lat: 53.548532,
                lng: -2.113063
              }} 
              onClick={this.onMarkerClick}  
            />
            {console.log(this.props)}
            <InfoWindow
              onOpen={this.windowHasOpened}
              onClose={this.windowHasClosed}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        
        </Main>
    
      </React.Fragment>
    );
  }
}

const Main = styled.main`
  padding: 2rem 0 1rem 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)