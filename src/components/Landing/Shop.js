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
      </main>
    </React.Fragment>
  );
};

export default Shop;