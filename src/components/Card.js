import React from 'react';

const Card = ({ brand, variety, style, country, stars, top }) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
      <div>

        <h2>{brand}</h2>
        <p><b>Variety:</b>{variety}</p>
        <p><b>Style:</b>{style}</p>
        <p><b>country:</b>{country}</p>
        <p><b>Stars:</b>{stars}</p>
        <p><b>Top:</b>{top}</p>
      </div>

    </div>


  );


}

export default Card;
