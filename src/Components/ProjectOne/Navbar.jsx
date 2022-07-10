import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
            <nav>
                <Link className='logo' to='/'>Website</Link>

                <div className="nav_ul">
                    <ul>
                        <li><Link className="nav-link" to='/'>Home</Link></li>

                        <li className='drop_li'>
                          <Link className="nav-link" to='/courses'>Courses <i className="fa fa-caret-down" ></i></Link>

                          <div className="dropdown_menu">
                            <ul>
                              <li><Link className = "drop_link" to='/economic'>B.A. Economics</Link></li>
                              <li><Link className = "drop_link" to='/bsc'>B.S.c</Link></li>
                              <li><Link className = "drop_link" to='/economic'>B.S.c Chemistry</Link></li>
                              <li><Link className = "drop_link" to='/geology'>B.S.c Geology</Link></li>
                              <li><Link className = "drop_link" to='/biology'>B.S.c Microbiology</Link></li>
                            </ul>
                          </div>
                          </li>

                        <li><Link className="nav-link" to='/blog'>Blog</Link></li>
                        <li><Link className="nav-link" to='/about'>About</Link></li>
                    </ul>
                </div>
            </nav>
      </div>
    </>
  );
};

export default Navbar;
