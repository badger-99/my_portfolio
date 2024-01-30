import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  const listenToNavigate = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fixScroll = listenToNavigate;

    return () => {
      fixScroll();
    };

  });

  return (
    <section id='layout'>
      <Outlet />
    </section>
  );
};
export default Layout;
