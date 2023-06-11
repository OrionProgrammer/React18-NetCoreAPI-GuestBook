import { Menu } from "./menu";
import React from "react";

import Alert from './alert';

export const Layout = (props) => (
  <>
    <Menu />
    <Alert />
    <div className="row mx-auto content-section">
        {/* side menu */}
      <div className="col-2 border border-dark bg-dark"></div>
        
        {/* main section */}
      <div className="col-10 pt-2 ps-3 border border-dark">{props.children}</div>
    </div>
  </>
);
