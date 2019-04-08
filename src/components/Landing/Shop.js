import React from 'react';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

export default class Shop extends React.Component {
  render() {
    return (
      <Main>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={38}
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
          <section>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </section>
        </CarouselProvider>
        <p>Proin eget tortor risus. Sed porttitor lectus nibh.</p>
      </Main>
    );
  }
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: var(--navbg);
  section {
    background-color: var(--navbg);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  }
  button {
    font-size: 2rem;
    color: var(--navcolor);
    border: var(--navcolor) 0.08rem ridge;
  }
  p {
    text-align: center;
  }
`;

const Figure = styled.figure`
  padding: 0;
  margin: 0;
  position: relative;
  float: left;
  img {
    width: 100%;
    min-height: 100%;
    clear: left;
  }
  figcaption {
    background-color: var(--navbg);
    border: 0.2rem solid var(--navcolor);
    color: var(--navcolors);
    max-width: 16rem;
    font-size: 2rem;
    padding: 2rem;
    display: block;
    float: left;
    position: absolute;
    top: 25%;
    left: 45%
  }
`;

/* https://www.npmjs.com/package/pure-react-carousel */