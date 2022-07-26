import Footer from './Footer';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
