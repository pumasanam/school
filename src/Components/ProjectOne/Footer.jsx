import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
            <div className="footer_Web">
        <div className="footer_list">
            <div className="footer">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat ipsa magni omnis saepe, neque maiores corrupti asperiores minima debitis, consequatur nam officiis alias dolorem ipsam sint explicabo perferendis assumenda!</p>
            </div>

            <div className="footer">
                <h3>Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>

            <div className="footer">
                <h3>Newsletter</h3>
                <p>Balkumari,Lalitpur <br /> 9878675678</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
