import React from 'react';

import './Home.css';

const Home = () => {


} 

return (
  <div className="flex-row align-center justify-center min-100-vh bg-primary">
    <div className="col-12 col-md-9 flex-column align-center bg-light p-5">
      <h1 className="text-primary">Library of Congress Search Engine</h1>
      <form id="search-form" className="form w-100">
        <input id="search-input" className="form-input w-100" type="text" placeholder="Search!">
        <select id="format-input" className="form-input w-100">
          <option value="" disabled selected>Select a format...</option>
          <option value="maps">Maps</option>
          <option value="audio">Audio</option>
          <option value="photos">Photos</option>
          <option value="manuscripts">Manuscripts</option>
          <option value="newspapers">Newspapers</option>
          <option value="film-and-videos">Film and Videos</option>
          <option value="notated-music">Notated Music</option>
          <option value="websites">Websites</option>
        </select>
        <button className="btn btn-info btn-block">Click Me</button>
      </form>
    </div>
  </div>
)