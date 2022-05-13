import React from 'react';
import tw, { styled } from 'twin.macro';

const data = import.meta.globEager('../content/member/*.json');
const faqsRaw = import.meta.globEager('../content/faqs/*.json');

const objectToArray = (obj) => {
  const propertyNames = Object.keys(obj);
  return propertyNames.map((i) => obj[i].default);
};

const formattedData = objectToArray(data);
const faqs = objectToArray(faqsRaw);

const App = () => {
  return (
    <>
      <div tw="flex flex-col gap-y-5 py-10">
        {
        faqs?.length > 0 && faqs.map((i) => {
          return (
            <div
              key={i.question}
            >
              <p tw="font-bold">Question:</p>
              <h1>{i.question}?</h1>
              <p tw="font-bold">Answer:</p>
              <h1>{i.answer}</h1>
            </div>
          );
        })
      }
      </div>
      {
        formattedData?.length > 0 && formattedData.map((i) => {
          return (
            <div key={i.name + i.picture}>
              <h1>{i.name}</h1>
              <p>{i.role}</p>
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
