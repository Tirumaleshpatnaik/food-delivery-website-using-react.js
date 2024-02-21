import React from 'react';

const Restaurantcard = ({ resdata }) => {




  return (
    <>
      <div id="restrocard">
        <img id="foodlogo" src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resdata.cloudinaryImageId
        } alt="" />

        <h3 id="resnm"><b> {resdata.res}</b></h3>
        <h3 id="cusine">🍟{resdata.cusine}</h3>
        <h3>{resdata.price}    ⭐{resdata.rating}</h3>
        <h3 id="address">{resdata.address}</h3>
        <h3 id="locality">📌{resdata.locality}</h3>

      </div>
    </>
  )
}

export default Restaurantcard