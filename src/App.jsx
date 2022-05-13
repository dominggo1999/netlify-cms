import React from 'react';
import tw, { styled } from 'twin.macro';
import { Routes as ReactRouter, Route } from 'react-router-dom';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex 
    justify-center
    items-center
    text-white
    text-2xl
  `}
`;

const App = () => {
  return (
    <Box>
      <Route
        element={<p>Home</p>}
        path="/"
      />
      <Route
        element={<p>About</p>}
        path="/about"
      />
    </Box>
  );
};

export default App;
