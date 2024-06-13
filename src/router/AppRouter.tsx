import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';
import { Layout } from '../components/Layout';
import { RepositoryPage } from '../Pages/RepositoryPage';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element= { <LandingPage/> } />
          <Route path='/repositories/:name' element= { <RepositoryPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}