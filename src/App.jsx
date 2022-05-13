import React from 'react';
import tw, { styled } from 'twin.macro';

const data = import.meta.globEager('../content/member/*.json');

const objectToArray = (obj) => {
  const propertyNames = Object.keys(obj);
  return propertyNames.map((i) => obj[i].default);
};

const formattedData = objectToArray(data);

const App = () => {
  return (
    <>
      {
        formattedData?.length > 0 && formattedData.map((i) => {
          return (
            <div key={i.name + i.picture}>
              <h1>{i.name}</h1>
              <img
                width="200"
                src={i.picture}
                alt={i.name}
              />
            </div>
          );
        })
      }
    </>
  );
};

export default App;
