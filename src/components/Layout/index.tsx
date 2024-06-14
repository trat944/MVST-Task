import { Outlet } from 'react-router-dom';
import { Header } from '../shared/Header';
import './layout.css' 

export const Layout = () => {
  return (
    <div className="app-background">
      <div className="app-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};