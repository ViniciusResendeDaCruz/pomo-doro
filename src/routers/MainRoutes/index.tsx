import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { NotFound } from '../../pages/404';
import { Info } from '../../pages/Info';
import { Home } from '../../pages/Home';
import { History } from '../../pages/History';
import { useEffect } from 'react';

function ScroolToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function MainRoutes() {
  return (
    <BrowserRouter>
      <ScroolToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
