import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Features</h4>
        <ul>
          <li className="cool-stuff">Cool stuff</li>
          <li>Random feature</li>
          <li>Team feature</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Resource</li>
          <li>Resource name</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>About</h4>
        <ul>
          <li>Team</li>
          <li>Locations</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
