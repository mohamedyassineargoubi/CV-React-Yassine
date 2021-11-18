import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
  <div className="header"></div>
         <div className="contactBox">
             <h1>Contactez-moi</h1>
           <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
          <span>Tunis</span>
           </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
           <CopyToClipboard text="+21690495245">
           <span
             className="clickInput"
             onClick={() => { alert('Téléphone copié!');}}>
             +216 90 49 52 45
           </span>
           </CopyToClipboard>
      </li>
      <li>
              <i className="far fa-envelope"></i>
           <CopyToClipboard text="mohamedyassine.argoubi@esprit.tn">
           <span
             className="clickInput"
             onClick={() => { alert('Mail copié!');}}>
             mohamedyassine.argoubi@esprit.tn
           </span>
           </CopyToClipboard>
      </li>
    </ul>
    </div>
    <div className="socialNetwork">
    <ul>
 <a href="https://www.linkedin.com/in/mohamed-yassine-argoubi-8b0069177/" target="_blank"
 rel="noopener noreferrer">
    <h4>LinkedIn</h4>
       <i className="fab fa-linkedin"> </i>
 </a>
 <a href="https://github.com/mohamedyassineargoubi" target="_blank"
 rel="noopener noreferrer">
    <h4>Github</h4>
  <i className="fab fa-github"></i>
 </a>
 <a href="https://www.facebook.com/yassou.est.5/" target="_blank"
 rel="noopener noreferrer">
    <h4>Facebook</h4>
  <i className="fab fa-facebook"></i>
 </a>
</ul>
 
</div>
</div>
</div>
    );
};

export default Contact;