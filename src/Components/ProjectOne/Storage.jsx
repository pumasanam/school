import React from 'react';
import {Link} from 'react-router-dom';


const Storage = ({list}) => {
  return (
    <>
      <div className="storage-list" key={list.id}>
      <i className="fa fa-question" aria-hidden="true"></i>
      <Link to={`/${list.id}`}><h5>{list.name}</h5></Link>
        <h6>City: {list.address.city}</h6>

      </div>
    </>
  );
};

export default Storage;
