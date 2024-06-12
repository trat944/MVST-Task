import { Outlet } from 'react-router-dom';
import './layout.css' 

export const Layout = () => {
  return (
    <div className="app-background">
      <div className="app-screen">
        <Outlet />
      </div>
    </div>
  );
};