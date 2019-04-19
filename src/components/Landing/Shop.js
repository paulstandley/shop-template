import React from 'react';
import Button from '@material-ui/core/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import './displayCSS.css';

export default class Shop extends React.Component {
  render() {
    return (
      <Main> 
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={38}
          totalSlides={5}>        
          <Slider>
            <Slide index={0}>
              <React.Fragment>
                <Figure>
                  <img src="img/resizeimage1.png" alt="vap shop"/>
                  <figcaption>Hello</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={1}>
              <React.Fragment>
              <Figure>
                  <img src="img/resizeimage6.jpg" alt="vap shop"/>
                  <figcaption>Welcom</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={2}>
              <React.Fragment>
              <Figure>
                  <img src="img/resizeimage2.jpg" alt="vap shop"/>
                  <figcaption>To The</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={4}>
              <React.Fragment>
              <Figure>
                  <img src="img/resizeimage3.jpg" alt="vap shop"/>
                  <figcaption>Vap Shop</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
            <Slide index={5}>
              <React.Fragment>
              <Figure>
                  <img src="img/resizeimage4.jpg" alt="vap shop"/>
                  <figcaption>And Store</figcaption>
                </Figure>
              </React.Fragment>
            </Slide>
          </Slider>
          <section>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </section>
        </CarouselProvider>
        <header style={{padding: "1rem 0"}}>
          <h1 className="flash">!!!  OPEN NOW !!!</h1> 
        </header> 
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
  width: 100%;
  min-height: 100%;
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