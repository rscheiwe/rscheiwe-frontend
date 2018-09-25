import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

const Page404 = ({ location }) => (
   <div>
      <div className="Container-view">
        <Header />
      </div>
      <div className="Page404-extend" >
        <h2>No match found for <br />
          <b><code>{location.pathname}</code></b>
        </h2>
      </div>
      <div className="Container-view">
        <Footer />

      </div>
   </div>
);

export default Page404
