import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <LandingPage/> } />
      </Routes>
    </BrowserRouter>
  )
}