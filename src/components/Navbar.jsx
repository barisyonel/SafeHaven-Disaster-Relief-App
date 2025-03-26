import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  // ✅ Sayfa değişince menü kapansın
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // ✅ Sayfa içi boşluğa tıklayınca menü kapansın
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo">🌍 SafeHaven</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/disasters" onClick={() => setIsOpen(false)}>Disasters</Link>
        <Link to="/shelters" onClick={() => setIsOpen(false)}>Shelters</Link>
        <Link to="/tips" onClick={() => setIsOpen(false)}>Tips</Link>
        <Link to="/community" onClick={() => setIsOpen(false)}>Community</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
