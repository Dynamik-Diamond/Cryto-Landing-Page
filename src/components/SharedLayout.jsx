import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Sidebar from './SideBar';

const SharedLayout = () => {
  return (
    <main className="font-Rubik">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
