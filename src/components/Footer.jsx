function Footer(){
  return(
  <footer className="footer" id="about">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src={`${import.meta.env.BASE_URL}assets/logo-text.png`} alt="Dev Stack"/>
        <p>Curated tools, technologies, and resources for developers building modern software.</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
          <div className="footer-column"><h3>PRODUCT</h3>
          <a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#technologies">Projects</a></div>
          <div className="footer-column"><h3>COMPANY</h3>
          <a href="#about">About</a><a href="#contact">Contact</a><a href="#about">Careers</a></div>
          <div className="footer-column" id="contact"><h3>LEGAL</h3>
          <a href="#about">Privacy Policy</a><a href="#about">Terms of Service</a></div></div>
          <div className="footer-bottom"><p>© 2026 Dev Stack. All rights reserved.</p>
          <div><a href="#about">Privacy</a><a href="#about">Terms</a></div></div></footer>
          );}
          export default Footer;
