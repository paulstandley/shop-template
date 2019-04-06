import React from 'react';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

export default class Shop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          totalSlides={3}>        
          <Slider>
            <Slide index={0}>
              <React.Fragment>
                <Figure>
                  <img src="https://res.cloudinary.com/pieol2/image/upload/v1535832484/vapShop7.jpg" alt="vap shop"/>
                  <figcaption>vap shop</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={1}>
              <React.Fragment>
              <Figure>
                  <img src="https://res.cloudinary.com/pieol2/image/upload/v1535832421/vapShop6.jpg" alt="vap shop"/>
                  <figcaption>vap shop</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={2}>
              <React.Fragment>
              <Figure>
                  <img src="https://res.cloudinary.com/pieol2/image/upload/v1535832197/vapShop3.jpg" alt="vap shop"/>
                  <figcaption>vap shop</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </React.Fragment>
    );
  }
}

const Figure = styled.figure`
  padding: 0;
  margin: 0;
  img {
    max-width: 100%;
    max-height: 60%;
  }
  figcaption {
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
  }
`;

/* https://www.npmjs.com/package/pure-react-carousel */