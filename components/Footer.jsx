const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>About</h4>
          <a href="#">Contact Us</a>
          <a href="#">About ShoppyGlobe</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <a href="#">Payments</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Security</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p>
            ShoppyGlobe <br />
            Internshala <br />
            harshpanchal031@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} ShoppyGlobe — INTERNSHALA</p>
      </div>
    </footer>
  );
};

export default Footer;
