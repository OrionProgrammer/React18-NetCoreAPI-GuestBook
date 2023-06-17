import React, { Component } from "react";
import {  Route, Routes } from "react-router-dom";
import { GuestList } from "./components/guests/guest-list";
import Guest from "./components/guests/guest";
import { Layout } from "./components/shared/layout";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Layout>
            <Routes>
              <Route path="/guest/add" element={<Guest />} exact />
              <Route path="/guest/edit/:id" element={<Guest />} exact />
              <Route path="/guest-list" element={<GuestList />} exact />
            </Routes>
            <h4>Welcome to your Guest Book</h4>
            <p>
                Click on 'Guest List' to view all guests attending.
            </p>

            <p>
                To add a guest, click on 'Add Guest'
            </p>
        </Layout>
        </>
    );
  }
}
