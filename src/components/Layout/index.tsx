import { Outlet } from 'react-router-dom';
import './layout.css' 
import { Header } from '../Header';

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