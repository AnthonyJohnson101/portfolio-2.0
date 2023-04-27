import React from 'react';

const styles = {
  nav: {
    backgroundColor: 'darkgrey'
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.nav}>
    <ul className="nav nav-bar">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <h5>About</h5>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <h5>Portfolio</h5>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          <h5>Resume</h5>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <h5>Contact</h5>
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
