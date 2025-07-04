import { Outlet } from 'react-router-dom';
import Header from './header/NewHeader';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
