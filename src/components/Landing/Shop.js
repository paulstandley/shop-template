import React from 'react';

const Shop = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <header>
        <h1>Premier Discount</h1>
      </header>
      <main>
        <img src="https://res.cloudinary.com/pieol2/image/upload/a_vflip,b_rgb:ba9f9f,c_scale,w_1000,z_01/a_180/v1535832016/vapShop1.jpg" width="800" height="500" />
      </main>
    </React.Fragment>
  );
};

export default Shop;