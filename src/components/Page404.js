import React from 'react'
import Header from './Header.js'

const Page404 = ({ location }) => (
   <div>
      <Header />
      <h2>No match found for <code>{location.pathname}</code></h2>
   </div>
);

export default Page404
