import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>🌍 SafeHaven - Disaster Awareness</h3>
        <p>Stay informed. Stay safe. Together, we are stronger against disasters.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/disasters">Disasters</a>
          <a href="/shelters">Shelters</a>
          <a href="/community">Community</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>

        <p className="footer-bottom">© 2025 Safe Haven | Designed for Disaster Awareness 🌪️</p>
      </div>
    </footer>
  );
}

export default Footer;