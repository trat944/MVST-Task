import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';
import { Layout } from '../components/Layout';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element= { <LandingPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}