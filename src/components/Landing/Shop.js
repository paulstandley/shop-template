import React from 'react';
import Button from '@material-ui/core/Button';

const Shop = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <header>
        <h1>Premier Discount</h1>
      </header>
      <main>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="nature"/></a>
          <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="nature"/></a>
          <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="nature"/></a>
          <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="nature"/></a>
          <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="nature"/></a>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Shop;