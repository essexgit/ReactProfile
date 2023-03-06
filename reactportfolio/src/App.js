import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

// Components

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      {/* Wrap Route elements in a Routes component */}
      < Route path="/" element={<RootLayout />}>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        < Route path='/home' element={< Home />} />
        < Route path="/experience" element={< Experience />} />
        < Route path="/projectgallery" element={< ProjectGallery />} />;
        {/* Define a route that will have descendant routes */}
        <Route path="contact" element={<Contact />} />
      </ Route>
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;

