import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: contact@koduor.com</p>
          <p>Phone: +254 725666535, +254 752820660</p>
          <p>Address: ASK Grounds, Jamhuri, off Ngong Road</p>
        </div>
        <div className="footer-section middle">
          <h3>Koduor And Company Holding Limited</h3>
          <p>
            Koduor And Company Holding Limited is a private owned investment
            company with headquarters in Nairobi.
          </p>
        </div>
        <div className="footer-section signoff">
          <h3>Stay Connected</h3>
          <p>&copy; 2024 Koduor. All rights reserved.</p>
          {/* <p>Follow us on social media:</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
