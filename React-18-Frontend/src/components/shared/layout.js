import { Menu } from "./menu";
import React from "react";
import { Link } from "react-router-dom";
import Alert from './alert';

export const Layout = (props) => (
  <>
    <Menu />
    <Alert />
    <div className="row mx-auto content-section">
        {/* side menu */}
      <div className="col-2 border border-dark bg-dark">
        <ul className='side-menu'>
          <li className="guest-list-link">
            <Link to='/guest-list' title="Guest List">Guest List</Link>
          </li>
          <li className="guest-add-link">
            <Link to="/guest/add" title="Add Guest">Add Guest</Link>
          </li>
        </ul>
      </div>
        
        {/* main section */}
      <div className="col-10 pt-2 ps-3 border border-dark">{props.children}</div>
    </div>
  </>
);
