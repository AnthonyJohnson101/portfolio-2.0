import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer'

const styles = {
  background: {
    
    paddingBottom: '2.5rem'
  },
  main: {
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: "aliceblue",
  }
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main style={styles.main}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <section style={styles.background}>
      {renderPage()}
      </section>
      <Footer/>
    </main>
  );
}

