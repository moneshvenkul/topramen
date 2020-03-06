import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (

            <Card
              key={i}
              brand={robots[i].Brand}
              variety={robots[i].Variety}
              style={robots[i].Style}
              country={robots[i].Country}
              stars={robots[i].Stars}
              top={robots[i]["Top Ten"]}

            />
          );
        })
      }
    </div>
  );
}

export default CardList;
